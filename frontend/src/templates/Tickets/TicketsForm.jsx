import React from 'react'

import FormList from '../Components/FormList'

export default props => {

    const renderForm = () => {

        if(Object.values(props.ticket).length === 0 ){
            return (
                <FormList/>
            )
        } else {
            return(
                <FormList ticket={props.ticket}/>
            )
        }
    }

    return (
        <React.Fragment>
            <div className={props.open? "ticket_form ticket_form_expanded" : "ticket_form"}>
                <div className="ticket_form_content">
                    <div className="close_form"
                        onClick={() => props.closeForm()}
                    >
                        x
                    </div>
                    <div className="content">{renderForm()}</div>
                </div>
            </div>

        </React.Fragment>
    );


}