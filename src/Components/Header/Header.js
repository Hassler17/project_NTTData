import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div class="container">
          <Link class="navbar-brand" to="/">NTT DATA</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Ingreso</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )

}
export default header;