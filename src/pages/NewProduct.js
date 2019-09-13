import React, { Component } from 'react';

import api from '../services/api';

import './NewProduct.css';

class New extends Component {

    state = {
        image: null,
        name: '',
        brand: '',
        description: '',
        price: '',
        qtd: '',
    }

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();

        data.append('image', this.state.image);
        data.append('name', this.state.name);
        data.append('description', this.state.description);
        data.append('price', this.state.price);
        data.append('brand', this.state.brand);
        data.append('qtd', this.state.qtd);

        console.log(`ok`)

        await api.post('products', data);

        console.log('aa')

        this.props.history.push('/')
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} id="new-post">
                <input type="file" onChange={this.handleImageChange}/>
                <input 
                    type="text"
                    name="name"
                    placeholder="Nome do Produto"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <input 
                    type="text"
                    name="brand"
                    placeholder="Marca do Produto"
                    onChange={this.handleChange}
                    value={this.state.brand}
                />
                <input 
                    type="number"
                    name="price"
                    placeholder="Preço do produto"
                    onChange={this.handleChange}
                    value={this.state.price}
                />
                <input 
                    type="text"
                    name="description"
                    placeholder="Descrição do Produto"
                    onChange={this.handleChange}
                    value={this.state.description}
                />
                <input 
                    type="number"
                    name="qtd"
                    placeholder="Disponibilidade do Produto"
                    onChange={this.handleChange}
                    value={this.state.qtd}
                />

                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default New;