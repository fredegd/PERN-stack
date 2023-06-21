import React, { useState } from "react";
import { useForm } from "react-hook-form"
import axios from 'axios';


export default function InputForm() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:3003/api/books', data)
      .then(response => {
        console.log('Success:', response.data);
        reset();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <>
    <div className="form-container">
    <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="input-item" defaultValue="" {...register("title", { required: true })} placeholder="title"/>
      <input className="input-item" defaultValue="" {...register("author", { required: true })} placeholder="Author"/>
      <input className="input-item" defaultValue="" {...register("description", { required: true })} placeholder="Description"/>
      <input className="input-item" defaultValue="" {...register("category", { required: true })} placeholder="Category"/>
      <input className="input-item" defaultValue="" {...register("cover_url", { required: true })} placeholder="Cover URL"/>
      <input className="input-item" defaultValue="" {...register("publishedat", { required: true })} placeholder="Publisher"/>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
    </div>
    </>
  );
}
