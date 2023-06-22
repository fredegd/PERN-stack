import React, { useState } from "react";
import { useForm } from "react-hook-form"
import axios from 'axios';


export default function InputForm({editActive, id, title, author,description, category, cover_url, publishedat}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    if(editActive){
      axios.put(`http://localhost:3003/api/books/${id}`, data)
      .then(response => {
        console.log('Success:', response.data);
         reset();
      })
      .catch(error => {
        console.error('Error:', error);
      })
      
    }else{
      axios.post('http://localhost:3003/api/books', data)
      .then(response => {
        console.log('Success:', response.data);
        reset();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    
  }

  return (
    <>
    <div className="form-container paged">
    <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="input-item" defaultValue={title?title:""} {...register("title", { required: true })} placeholder="title"/>
      <input className="input-item" defaultValue={author?author:""} {...register("author", { required: true })} placeholder="Author"/>
      <input className="input-item" defaultValue={description?description:""} {...register("description", { required: true })} placeholder="Description"/>
      <input className="input-item" defaultValue={category?category:""} {...register("category", { required: true })} placeholder="Category"/>
      <input className="input-item" defaultValue={cover_url?cover_url:""} {...register("cover_url", { required: true })} placeholder="Cover URL"/>
      <input className="input-item" defaultValue={publishedat?publishedat:""} {...register("publishedat", { required: true })} placeholder="Publisher"/>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
    </div>
    </>
  );
}
