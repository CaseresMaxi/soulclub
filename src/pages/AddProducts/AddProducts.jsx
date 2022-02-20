import React, { useState, useEffect } from "react";
import { Form, Field } from 'react-final-form'
import db from "../../firebase"
import { useParams } from 'react-router-dom'
import 'firebase/firestore';
import "./AddProducts.scss"


import { collection, doc, setDoc, Firestore, onSnapshot, snapshotEqual, deleteDoc, addDoc, getDoc } from 'firebase/firestore';
import { Product } from "../../components/product/Product";
export const AddProduct = () => {
    const [imgB64, setImgB64] = useState("")
    const toBase64 = (files) => {
        Array.from(files).forEach(file => {
            var render = new FileReader();
            render.readAsDataURL(file);
            render.onload = function () {
                var b64 = render.result
                setImgB64(b64)
            }
        })

    }

    const { id } = useParams()
    const [initialValues, setInitialValues] = useState({})
    const [type, setType] = useState("");

    useEffect(async () => {
        if (id) {
            console.log(id);
            const docSnap = await getDoc(doc(db, "productos", id));
            setInitialValues(docSnap.data())
        }
    }, [])

    return (<div>
        <input type="file" onChange={(e) => toBase64(e.target.files)}></input>
        {/* <img src={imgB64 ? imgB64 : initialValues.src}></img> */}
        <select value={initialValues.type} select={initialValues.type} onChange={(e) => setType(e.target.value)}>
            <option value="">seleccionar categoria</option>
            <option value="Pantalon">Pantalon</option>
            <option value="Vestido">Vestido</option>
            <option value="Accesorio">Accesorio</option>
            <option value="Remera">Remera</option>
        </select>
        <Form initialValues={initialValues}
            onSubmit={async (values) => {
                if (!id) {
                    await addDoc(collection(db, "productos"),
                        { ...values, src: imgB64, talles: values.talles.split(","), type });
                    window.location.reload();
                }
                else {
                    await setDoc(doc(db, "productos", id),
                        {
                            ...values,
                            src: imgB64 ? imgB64 : initialValues.src,
                            type: initialValues.type!=="" && type===""?initialValues.type:type,
                            talles: Array.isArray(values.talles) ? initialValues.talles : values.talles.split(",")
                        });
                    window.location.reload();
                }
            }
            }>
            {({ handleSubmit, form, values }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="nombre"
                    />
                    <Field
                        name="regularPrice"
                        component="input"
                        type="text"
                        placeholder="Precio regular"
                    />
                    <Field
                        name="price"
                        component="input"
                        type="text"
                        placeholder="precio"
                    />
                    <Field
                        name="desc"
                        component="input"
                        type="text"
                        placeholder="promocion"
                    />
                    <Field
                        name="stock"
                        component="input"
                        type="text"
                        placeholder="stock"
                    />
                    <Field
                        name="talles"
                        component="input"
                        type="text"
                        placeholder="talles"
                    />
                    <div className="buttons-container">
                        <button className="send-product-button">enviar</button>
                        <button className="delete-product-button" onClick={async () => { await deleteDoc(doc(db, "productos", id)); window.location.href = "/" }}>eliminar producto</button>
                    </div>
                        <h1 className="vista-previa">Vista previa</h1>
                    <div className="product-container">
                        <Product product={{ id: "1", data: { name: values.name, price: values.price, regularPrice: values.regularPrice, talles: [""], src: imgB64 !== "" ? imgB64 : initialValues.src, stock: "1", type: type } }}></Product>
                    </div>
                </form>)}
        </Form>
    </div>)
}