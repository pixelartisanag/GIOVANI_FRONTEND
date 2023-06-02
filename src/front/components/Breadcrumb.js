import React from "react";

const Breadcrumb = ({ title, type }) => (
    <section className="categorie-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="categorie-title">
              <small>
                <a href="index.html">Alissa Monterro</a>
                <i className="fas fa-angle-right" />
                {title}
              </small>
              {type ? (
                  <h3>
                    Category : <span>{type}</span>{" "}
                  </h3>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default Breadcrumb;