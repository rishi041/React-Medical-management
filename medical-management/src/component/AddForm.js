import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/medicine";

function AddForm() {
  const [id, setId] = useState(null);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const data = {
    id: parseInt(id),
    image: image,
    name: name,
    description: description,
  };

  // add data start
  function submit() {
    api.post("/medicine", data).then(navigate("/home"));
  }
  // add data end

  return (
    <>
      <div>
        <form action="" className="py-2" onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              Id
            </label>
            <input
              type="number"
              name="id"
              className="form-control"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="text"
              name="image"
              className="form-control"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              maxLength="200"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="btn btn-dark btn-rounded btn-lg">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddForm;
