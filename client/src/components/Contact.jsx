import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Switch from "react-switch";




function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user", {
        name,
        message,
      })
      .then(function (response) {
        console.log("complete");
        setName("");
      setMessage("");
      //navigate("/admin");
      setSuccess(true); // Added to display success message
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage(true); // Added to display error message
      });
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center pt-4">
        <h2 className="text-primary">Contact me</h2>
        <div className="w-45">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Message
              </label>
              <textarea
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {success && (
              <div className="alert alert-success" role="alert">
                Message sent successfully!
              </div>
            )} {/* Added to display success message */}

            {errorMessage && (
              <div className="alert alert-danger" role="alert">Error</div>)
            }
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <div>
          <Switch/>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Contact;
