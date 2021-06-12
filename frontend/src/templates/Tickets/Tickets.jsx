import React, { Component } from 'react'
import axios from 'axios'

import TicketsForm from './TicketsForm'
import TicketsList from './TicketsList'

const URL = 'http://localhost:3333/tickets'

export default class Tickets extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            subject: '',
            description: '',
            list: [],
            open: false,
            ticket: {}
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.openForm = this.openForm.bind(this)
        this.closeForm = this.closeForm.bind(this)
        this.refresh()
    }

    handleRemove(ticket){
        axios.delete(`${URL}/${ticket.id}`)
             .then(resp => this.refresh())
    }

    openForm(ticket){
        this.setState({
            open: true
        })
    }

    closeForm(){
        this.setState({
            open: false
        })
    }

    refresh(){
        axios.get(`${URL}`)
             .then(resp =>
                this.setState(
                    {
                        ...this.state,
                        list: resp.data
                    }
                )
             )
    }

    render(){
        return(
            <div className="tickets_container" >
                <TicketsList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    openForm={this.openForm}
                />
                <TicketsForm
                    open={this.state.open}
                    closeForm={this.closeForm}
                />
            </div>
        )
    }
}