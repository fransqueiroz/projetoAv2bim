import React from 'react'

export default props => {


    return (
        <React.Fragment>
            <div className={props.open? "ticket_form ticket_form_expanded" : "ticket_form"}>
                <div className="ticket_form_content">
                    <div className="close_form"
                        onClick={() => props.closeForm()}
                    >
                        x
                    </div>
                    <div className="content">Form</div>
                </div>
            </div>

        </React.Fragment>
    );


}