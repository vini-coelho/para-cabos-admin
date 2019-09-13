import React, { Component } from 'react';

import api from '../services/api';

import './Home.css'

export default class Orcamentos extends Component {

    state = {
        data: [],
        users: []
    }

    async componentDidMount(){
        try {
            const response = await api.get('orcamentos');
            await this.setState({ data: response.data })

            const ids = this.state.data.map(item => item.instid)

            const usersResponse = await api.post('/users/order', { ids })

            this.setState({ users: usersResponse.data });
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

                    console.log(user)
                    return (
                    <article key={Math.random()}>
                        <section>
                            <header>
                                <div className="product-info">
                                    <strong>Usuário: {user.username}</strong>
                                    <span>Total: R$ {item.total.toFixed(2).toString().split('.').join(',')}</span>
                                </div>
                            </header>
                        </section>
                    </article>
                )}) : null }
            </div>
        )
    }
}