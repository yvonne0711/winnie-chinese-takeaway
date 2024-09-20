import React from "react";
import "../index.css";
import Card from "../components/Card";
import MyMap from "../components/Map";

function Contact() {
  return (
    <div className="main">
      <h1 className="page-title">Contact</h1>
      <Card className="contact-card">
        Our takeaway is collection-only and we do not deliver. You can order in
        person or, to avoid waiting, over the phone. We accept cash and card
        payments. <br /> <br />
        Opening Hours: <br />
        Tuesday-Sunday: 17:30 - 21:00 <br />
        Monday: Closed <br />
      </Card>
      <div className="content contact-content">
        Free on-street parking is available in front of the takeaway. <br />
        <ul>
          <li className="list-group-item">114 Thorpe Street</li>
          <li className="list-group-item">Thorpe Hesley</li>
          <li className="list-group-item">Rotherham</li>
          <li className="list-group-item">S61 2RP</li>
          <li className="list-group-item">
            <span>0114 245 7088</span>
          </li>
        </ul>
        <MyMap />
      </div>
    </div>
  );
}

export default Contact;
