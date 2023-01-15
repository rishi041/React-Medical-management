import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../api/medicine";

import AddForm from "./AddForm";
import EditForm from "./EditForm";

const Homecart = () => {
  const [medicines, setMedicines] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [passid, setPassId] = useState();

  const navigate = useNavigate();

  const loadUsers = () => {
    api.get("/medicine").then((res) => {
      setMedicines(res.data);
    });
  };

  // get Data start
  useEffect(() => {
    loadUsers();
  }, []);
  // get Data end

  // delete data start
  function Delete(id) {
    if (
      window.confirm("please confirm if you want delete the record") == true
    ) {
      api.delete(`/medicine/${id}`).then(loadUsers()).then(navigate("/home"));
    }
  }
  // delete data end

  const handleShowAdd = () => {
    setShowAdd(true);
  };

  const handleCloseAdd = () => {
    setShowAdd(false);
  };

  const handleShowEdit = (id) => {
    setShowEdit(true);
    setPassId(id);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  return (
    <>
      <div className="row">
        <span>
          <button
            onClick={handleShowAdd}
            className="btn btn-success float-end px-3 py-2 mx-3 my-2"
          >
            Add Medicine
          </button>
        </span>
        <div>
          <center className="p-2">
            <Modal show={showAdd} onHide={handleCloseAdd}>
              <Modal.Header>Medicine Data Form</Modal.Header>
              <Modal.Body>
                <AddForm />
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleCloseAdd}
                >
                  Close
                </button>
              </Modal.Footer>
            </Modal>
            <Modal show={showEdit} onHide={handleCloseEdit}>
              <Modal.Header>Medicine Data Form</Modal.Header>
              <Modal.Body>
                <EditForm passid={passid} />
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleCloseEdit}
                >
                  Close
                </button>
              </Modal.Footer>
            </Modal>
          </center>
        </div>
        <div className="row">
          {medicines &&
            medicines.map((record, index) => {
              return (
                <>
                  <div className="col-xs-12 col-sm-6 col-md-4 my-4">
                    <div className="card" key={index}>
                      <div
                        className="bg-image hover-overlay ripple"
                        data-mdb-ripple-color="light"
                      >
                        <div className="album img-thumbnail">
                          <div className="imgContainer ">
                            <img
                              src={record.image}
                              className="img-fluid"
                              alt="medicine"
                            />
                          </div>
                        </div>
                        <a href="#0">
                          <div
                            className="mask"
                            style={{ backgroundColor: "gray" }}
                          ></div>
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="headingContainer ">
                          <h5 className="card-title headingInside">
                            {index + 1 + "."} {record.name}
                          </h5>
                        </div>

                        <div className="album">
                          <div className="textContainer ">
                            <p className="card-text textInside">
                              {record.description}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleShowEdit(record.id)}
                          className="btn btn-warning my-2 py-2 mx-1"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => Delete(record.id)}
                          className="btn btn-danger my-2 py-2 mx-1"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Homecart;
