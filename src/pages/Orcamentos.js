import React, { Component } from 'react';

import api from '../services/api';

import './Orcamentos.css';
import ProductList from './ProductList';

export default class Orcamentos extends Component {

    state = {
        data: [],
        users: [],
        hiddenItems: [],
    }

    toggleItem = id => {
        if(this.state.hiddenItems.includes(id)) {
            const hiddenItems = this.state.hiddenItems.filter(item => item !== id )
            this.setState({ hiddenItems })
        }
        else {
            const hiddenItems = this.state.hiddenItems;
            hiddenItems.push(id);
            this.setState({ hiddenItems })
        }
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
            <div id="post-list">
                {this.state.users.length && this.state.data.length ? this.state.data.map(item => {  
                    const [ user ] = this.state.users.filter(user => user.id === item.instid)
                    return (
                    <article key={Math.random()}>
                        <section>
                        
                        <div className="orc-info">
                            <strong>Usuário: {user.username}</strong>
                            <span>Total: R$ {item.total.toFixed(2).toString().split('.').join(',')}</span>
                        </div>

                        <div className="orc-info">
                            <strong>Lista de Produtos:</strong>
                            <button 
                            onClick={() => this.toggleItem(item.id)}
                            >Mostrar</button>
                        </div>

                        {!this.state.hiddenItems.includes(item.id) ? 
                        <div className="product-list" > 
                            <ProductList data={JSON.parse(item.produtos)} />
                        </div> : null }
                            
                        </section>
                    </article>
                )}) : null }
            </div>
        )
    }
}