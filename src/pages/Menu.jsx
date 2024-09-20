import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import menuPDF from "../../public/Menu.pdf";
import "../index.css";
import Card from "../components/Card";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.6.82/pdf.min.mjs`;

function Menu() {
  return (
    <div className="main">
      <h1 className="page-title">Menu</h1>
      <Card className="menu-card">
        We offer a range of traditional Chinese takeaway food. Popular choices
        are our Mini Pancake Rolls, Barbecued Spare Ribs, our Black Bean Sauce dishes, our Crispy Chilli dishes, Special Curry, Special Fried Rice, Sweet & Sour Chicken, Salt and Pepper Chips.
      </Card>
      <p className="content menu-content">
        <a href={menuPDF} target="_blank" rel="noopener noreferrer">
          Click to view Menu
        </a>
        <br /><br/>
        <span style={{fontStyle: "italic"}}>ALLERGY ADVICE:</span><br/> Some of our dishes may contain these 14 allergens as
        follows: Cereals containing Gluten, Peanuts, Nuts, Milk, Soya, Mustard,
        Lupin, Eggs, Fish, Crustaceans, Molluscs, Sesame Seeds, Celery, Sulphur
        Dioxide. If you have any allergies to these products, please inform us
        before ordering. We will do our best to advise you.
      </p>
    </div>
  );
}

export default Menu;
