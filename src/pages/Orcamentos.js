import React, { Component } from 'react';
import Modal from 'react-modal';

import api from '../services/api';

import './Orcamentos.css';
import ProductList from './ProductList';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#root');

export default class Orcamentos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            users: [],
            hiddenItems: [],
            modalVisible: false,
            file: null
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    toggleItem = id => {

        if (this.state.hiddenItems.includes(id)) {
            const hiddenItems = this.state.hiddenItems.filter(item => item !== id )
            this.setState({ hiddenItems })
        }
        else {
            const hiddenItems = this.state.hiddenItems;
            hiddenItems.push(id);
            this.setState({ hiddenItems })
        }
    }

    handleSubmit = async e => {
        try {
            e.preventDefault();

            const data = new FormData();

            data.append('boleto', this.state.file);
            data.append('senderEmail', 'vtc.eng17@uea.edu.br');
            data.append('receiverEmail', 'vinicius_coelho@live.com');

            await api.post('/sendorc', data);

            this.closeModal();
        }
        catch (err) {
            alert(err);
        }
    }

    openModal() {
        this.setState({ modalVisible: true });
    }

    closeModal() {
        this.setState({ modalVisible: false });
    }

    handleFileChange = e => {
        this.setState({ file: e.target.files[0] });
    }

    async componentDidMount(){
        try {
            const response = await api.get('orcamentos');
            await this.setState({ data: response.data })

            const ids = this.state.data.map(item => item.instid)

            const hiddenItems = this.state.data.map(item => item.id)

            const usersResponse = await api.post('/users/order', { ids })

            this.setState({ users: usersResponse.data, hiddenItems });
        }
        catch (err) {
            alert(err)
        }
    }

    render() {
        

        return (
            <div id="po-list">
                <Modal
                className="Modal"
                style={customStyles}
                overlayClassName="Overlay"
                isOpen={this.state.modalVisible}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                >
                        <h3>Enviar boleto</h3> <br></br>
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleFileChange} type="file" accept="application/pdf" name="file" />
                            <button type="submit" name="enviar">Enviar boleto</button>
                        </form>
                    
                    
                </Modal>

                { this.state.users.length && this.state.data.length ? 
                this.state.data.map(item => {  
                    const [ user ] = this.state.users.filter(user => user.id === item.instid)
                    return (
                    <article key={Math.random()}>
                        <section>
                        
                            <div className="orc-info">
                                <strong>Usuário: {user.username}</strong>
                                <span>Total: R$ {item.total.toFixed(2).toString().split('.').join(',')}</span>
                            </div>

                            <div className="list-title">
                                <strong>Lista de Produtos:</strong>
                                <button 
                                onClick={() => this.toggleItem(item.id)}
                                >Mostrar</button>
                            </div>
                        </section>

                        <div className='lista'>
                            { !this.state.hiddenItems.includes(item.id) ? 
                            <ProductList data={JSON.parse(item.produtos)} />
                            : null }
                        </div>

                        <button onClick={() => this.openModal()}>Enviar Boleto</button>
                        
                    </article>
                )}) : null }
            </div>
        )
    }
}