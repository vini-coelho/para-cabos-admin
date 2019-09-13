import React, { Component } from 'react';

import api from '../services/api';

import './ProductList.css'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            productsQtd: []
        }
    }

    async componentDidMount(){
        const productsIds = this.props.data.map(item => item.id)
        const productsQtd = this.props.data.map(item => item.qtd)
        const response = await api.post('products/byid', { ids: productsIds });
        this.setState({ data: response.data, productsQtd })
    }

    render() {
        return (
            <div id="p-list">
                {this.state.data.map((item, index) => {
                const [ reais, cents ] = parseFloat(item.price).toFixed(2).toString().split('.');
                return (
                    <article key={item.id}>
                        <section>
                            <header>
                                <div className="info">
                                    <div className="nome-preco">
                                        <strong>{item.name}</strong>
                                        <span>Preço: R$ {reais},{cents}</span>
                                    </div>
                                    <span>x {this.state.productsQtd[index]}</span>
                                </div>
                            </header>
                        </section>
                    </article>
                )})}
            </div>
        )
    }
}