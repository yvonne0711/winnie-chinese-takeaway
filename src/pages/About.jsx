import React from "react";
import '../index.css';
import Card from '../components/Card';

function About() {
  return (
    <div className="main">
      <h1 className="page-title">About</h1>
      <Card className="about-content">
        <span className="text-uppercase welcome">Welcome to WINNIE Chinese Takeaway</span><br /> Chinese and English hot and fresh meals to take away, based in Thorpe Hesley.
      </Card>
      <p className="content">
        Our takeaway offers a range of hot, fast, fresh Chinese and English dishes, for as long as 22 years.<br /> <br/>You can order in person or, to avoid waiting, over the phone. We are a collection-only takeaway and do not deliver. We accept cash and card payments. 
      </p>
    </div>
  );
}

export default About;
