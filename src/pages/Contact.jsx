import React from "react";
import "../index.css";
import Card from "../components/Card";

function Contact() {
  return (
    <div className="main">
      <h1 className="page-title">Contact</h1>
      <Card className="contact-card">
        Our takeaway is collection-only and we do not deliver. You can order in person or, to avoid waiting, over the phone. We accept cash and card payments. <br /> <br />
        Opening Hours: <br/>
        Tuesday-Sunday: 17:30 - 21:00 <br/>
        Monday: Closed <br/>
      </Card>
      <p className="content">map</p>
    </div>
  );
}

export default Contact;
