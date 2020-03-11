// Framework Imports
import React from "react";
// Component Imports
import Button from "Components/Button";
// Style Imports
import "./contactInfo.css";

const ContactInfo = () => {
  return (
    <div className="ContactInfo">
      <h2>Contact Us</h2>
      <p className="ContactInfo-email">
        <strong>General Support:</strong> info[at]bombsheltergames[dot]com
      </p>
      <p>
        <strong>Press Inquiries:</strong> press[at]bombsheltergames[dot]com
      </p>
      <Button
        type="ghost"
        href="https://bombsheltergamescom.ipage.com/DoSPressKit_2020-02.zip"
        download
      >
        Download Press Kit
      </Button>
    </div>
  );
};

export default ContactInfo;