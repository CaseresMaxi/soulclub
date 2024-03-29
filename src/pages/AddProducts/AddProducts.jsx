import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import db from "../../firebase";
import { useParams } from "react-router-dom";
import "firebase/firestore";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
  getDoc,
} from "firebase/firestore";
// import { collection, doc, setDoc, Firestore, onSnapshot, snapshotEqual, deleteDoc, addDoc, getDoc } from 'firebase/firestore';

export const AddProduct = () => {
  const [imgB64, setImgB64] = useState("");
  const toBase64 = (files) => {
    Array.from(files).forEach((file) => {
      var render = new FileReader();
      render.readAsDataURL(file);
      render.onload = function () {
        var b64 = render.result;
        setImgB64(b64);
      };
    });
  };

  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (id) {
      console.log(id);
      const docSnap = await getDoc(doc(db, "productos", id));
      setInitialValues(docSnap.data());
    }
  }, [id]);

  return (
    <div>
      <input type="file" onChange={(e) => toBase64(e.target.files)}></input>
      <img src={imgB64 ? imgB64 : initialValues.src} alt=""></img>
      <Form
        initialValues={initialValues}
        onSubmit={async (values) => {
          if (!id) {
            await addDoc(collection(db, "productos"), {
              ...values,
              src: imgB64,
              talles: values.talles.split(","),
            });
            window.location.reload();
          } else {
            await setDoc(doc(db, "productos", id), {
              ...values,
              src: imgB64 ? imgB64 : initialValues.src,
              talles: Array.isArray(values.talles)
                ? initialValues.talles
                : values.talles.split(","),
            });
            window.location.reload();
          }
        }}
      >
        {({ handleSubmit, form, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="nombre"
            />
            <Field
              name="price"
              component="input"
              type="text"
              placeholder="precio"
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
            <button>enviar</button>
          </form>
        )}
      </Form>
      <button
        onClick={async () => {
          await deleteDoc(doc(db, "productos", id));
          window.location.href = "/";
        }}
      >
        eliminar producto
      </button>
    </div>
  );
};
