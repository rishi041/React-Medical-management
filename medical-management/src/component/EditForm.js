import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/medicine";

function EditForm(props) {
  const [id, setId] = useState(props.passid);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/medicine/${id}`).then((res) => {
      setId(res.data.id);
      setImage(res.data.image);
      setName(res.data.name);
      setDescription(res.data.description);
    });
  }, []);

  const data = {
    id: parseInt(id),
    image: image,
    name: name,
    description: description,
  };

  // edit data start

  function update() {
    api.put(`/medicine/${id}`, data).then(navigate("/home"));
  }
  // edit data end

  return (
    <>
      <div>
        <form action="" className="py-2" onSubmit={update}>
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
            <button type="submit" className="btn btn-dark btn-rounded btn-lg">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditForm;
