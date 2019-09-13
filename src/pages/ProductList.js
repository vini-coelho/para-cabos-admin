import React, { Component } from 'react';

import api from '../services/api';

import './Home.css'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    async componentDidMount(){
        const productsIds = this.props.data.map(item => item.id)
        console.log(this.props.data.map(item => item.id))
        const response = await api.post('products/byid', { ids: productsIds });
        this.setState({ data: response.data })
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