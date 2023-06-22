import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function InputForm({
  editBookData,
  id,
  title,
  author,
  description,
  category,
  cover_url,
  publishedat,
  isactive,
  handleUpdate
}) {

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (editBookData) {
      axios
        .put(`http://localhost:3003/api/books/${id}`, data)
        .then((response) => {
          console.log("Updated with Success:", response.data);
          handleUpdate(response.data)
          reset();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      axios
        .post("http://localhost:3003/api/books", data)
        .then((response) => {
          console.log("Added new item Successfully:", response.data);
          reset();
          navigate(`/books`)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-item"
            defaultValue={title ? title : ""}
            {...register("title", { required: true })}
            placeholder="title"
          />
          <input
            className="input-item"
            defaultValue={author ? author : ""}
            {...register("author", { required: true })}
            placeholder="Author"
          />
          <input
            className="input-item"
            defaultValue={description ? description : ""}
            {...register("description", { required: true })}
            placeholder="Description"
          />
          <input
            className="input-item"
            defaultValue={category ? category : ""}
            {...register("category", { required: true })}
            placeholder="Category"
          />
          <input
            className="input-item"
            defaultValue={cover_url ? cover_url : ""}
            {...register("cover_url", { required: true })}
            placeholder="Cover URL"
          />
          <input
            className="input-item"
            defaultValue={publishedat ? publishedat : ""}
            {...register("publishedat", { required: true })}
            placeholder="Publisher"
          />
          <div className="active-check">
            <span>is&nbsp;active?&nbsp;</span>
          <input 
           type="checkbox"
          
           defaultChecked={isactive? true:false}
           {...register("isactive")} 
            />
          </div>
           
          {errors.exampleRequired && <span>This field is required</span>}
          <input className="submit-button" type="submit" value={"Submit"} />
        </form>
      </div>
    </>
  );
}
