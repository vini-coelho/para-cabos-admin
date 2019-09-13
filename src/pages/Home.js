import React, { Component } from 'react';

import api from '../services/api';

import './Home.css'

export default class Home extends Component {

    state = {
        data: [],
    }

    async componentDidMount(){
        const response = await api.get('products');
        this.setState({ data: response.data })
        console.log(response)
    }

    render() {
        return (
            <div id="post-list">
                {this.state.data.map(item => {
                const [ reais, cents ] = parseFloat(item.price).toFixed(2).toString().split('.');
                return (
                    <article key={item.id}>
                        <section>
                            <header>
                                <div className="product-info">
                                    <strong>{item.name}</strong>
                                    <span>Preço: R$ {reais},{cents}</span>
                                </div>
                            </header>
                            <img alt='a' src={`https://para-cabos-backend.herokuapp.com/files/resized/${item.image}`}/>
                        </section>
                    </article>
                )})}
            </div>
        )
    }
}