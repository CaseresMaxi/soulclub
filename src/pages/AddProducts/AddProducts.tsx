import React from "react";
import { Form, Field } from 'react-final-form'

export const AddProduct: React.FC<any> = (): any => {
    return (<div>
        AddPRoducts here
        <Form onSubmit={() =>  console.log("pepe") }>
            {({handleSubmit, form, values} )=>(
        <form onSubmit={handleSubmit}>
            <Field
                name="asd"
                component="input"
                type="text"
            />
            <Field
                name="xcv"
                component="input"
                type="text"
            />
            <Field
                name="qwe"
                component="input"
                type="text"
            />
            <button>enviar</button>
        </form>)}
        </Form>
    </div>)
}