/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: NewPostCard.jsx
 * Version: 1.0
 * Created: 27/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Component NewPostCard. New entry window. Form and operations
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPostCard(props) {
  const { savePost } = props;
  const [formState, setFormState] = useState({
    title: "",
    content: "",
    image: "url desde react",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    savePost(formState);
    setFormState({
      title: "",
      content: "",
      image: "",
    });
    navigate("/");
  };

  const handleOnChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  return (
    <main className="d-flex justify-content-center min-vh-100">
      <div className="card">
        <div className="card-body">
          <p className="card-title d-flex justify-content-center font-family--Montserrat-font">
            {" "}
            Nueva Entrada
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-group ">
                <input
                  onChange={handleOnChange}
                  type="text"
                  className="form-control mt-3 "
                  name="title"
                  id="title"
                  placeholder="Título"
                ></input>
              </div>
              <div className="form-group">
                <textarea
                  onChange={handleOnChange}
                  className="form-control  mt-3"
                  name="content"
                  id="content"
                  placeholder="Introducir texto del post"
                ></textarea>
              </div>
              <div className="form-group m-2">
                <input
                  type="file"
                  className="form-control-file  mt-3"
                  accept="image/*"
                ></input>
              </div>
              <div className="d-flex justify-content-center  mt-3">
                <button type="Submit" className="btn btn-outline-success">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
