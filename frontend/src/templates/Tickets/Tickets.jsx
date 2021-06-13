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
            msgSuccess: ''
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.openForm = this.openForm.bind(this)
        this.openFormList = this.openFormList.bind(this)
        this.closeForm = this.closeForm.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeSubject = this.handleChangeSubject.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.closeMsg = this.closeMsg.bind(this)
        this.refresh()
    }

    handleRemove(ticket){
        axios.delete(`${URL}/${ticket.id}`)
             .then(resp => this.refresh())
    }

    openForm(ticket){
        this.closeMsg()
        this.setState({
            open: true,
            id: ticket.id,
            name: ticket.name,
            subject: ticket.subject,
            description: ticket.description
        })
    }
    openFormList(){
        this.closeMsg()
        this.setState({
            open: true,
            id: '',
            name: '',
            subject: '',
            description: '',
        })
    }

    closeForm(){
        this.setState({
            open: false
        })
    }

    handleChangeName(event) {
        event.preventDefault();
        this.setState({...this.state, name: event.target.value})
    }

    handleChangeSubject(event) {
        event.preventDefault();
        this.setState({...this.state, subject: event.target.value})
    }

    handleChangeDescription(event) {
        event.preventDefault();
        this.setState({...this.state, description: event.target.value})
    }

    closeMsg(){
        var close_msg = document.querySelector('.msg_success')
        if(close_msg){
            close_msg.remove()
        }
    }

    handleAdd() {
        const id = this.state.id;
        const name = this.state.name;
        const subject = this.state.subject;
        const description = this.state.description;

        if(id){
            axios.put(URL, {id,name,subject,description})
            .then(resp => {
                this.setState({msgSuccess: resp.data.message})
                this.closeForm()
                this.refresh()
            })
        } else {
            axios.post(URL, {name,subject,description})
            .then(resp => {
                this.setState({msgSuccess: resp.data.message})
                this.closeForm()
                this.refresh()
            })
        }
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
                    openFormList={this.openFormList}
                    msgSuccess={this.state.msgSuccess}
                    closeMsg={this.closeMsg}
                />
                <TicketsForm
                    open={this.state.open}
                    closeForm={this.closeForm}
                    handleChangeName={this.handleChangeName}
                    handleChangeSubject={this.handleChangeSubject}
                    handleChangeDescription={this.handleChangeDescription}
                    handleAdd={this.handleAdd}
                    id={this.state.id}
                    name={this.state.name}
                    subject={this.state.subject}
                    description={this.state.description}
                />
            </div>
        )
    }
}