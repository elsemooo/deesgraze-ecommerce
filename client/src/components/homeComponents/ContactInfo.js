import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row contact_info_row_center">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Deesgraze 24x7</h5>
            <p>+51 999 999 999</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Soporte 24x7</h5>
            <p>+51 981 203 309</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
