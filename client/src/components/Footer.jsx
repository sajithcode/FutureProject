import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


function Footer() {

    const handleSubmit = () => {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
          });
    }


  return (
    <>
      <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button" onClick={handleSubmit}>Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#twitter"/></svg></Link></li>
        <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#instagram"/></svg></Link></li>
        <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#facebook"/></svg></Link></li>
      </ul>
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer
