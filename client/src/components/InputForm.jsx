import React, { useState } from "react";
import axios from 'axios';


export default function InputForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3003/api/books', formData)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  return (
    <>
      <div className="form-container">
        <form
          className="form-input"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e)
            console.log(formData);
          }}
        >
          <label>
            Title:
            <input
              type="text"
              name="title"
              className="input-item"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              className="input-item"
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              className="input-item"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              className="input-item"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </label>
          <label>
            Cover URL:
            <input
              type="text"
              name="coverURL"
              className="input-item"
              onChange={(e) =>
                setFormData({ ...formData, cover_url: e.target.value })
              }
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
