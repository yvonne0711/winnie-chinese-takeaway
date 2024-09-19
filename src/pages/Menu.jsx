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
        We offer a range of traditional Chinese takeaway food. Popular choices are: our Mini Pancake Rolls, Barbecued Spare Ribs, our Black Bean Sauce dishes, our Crispy Chilli dishes, Special Curry, Special Fried Rice, Sweet & Sour Chicken, Beef with Mushrooms, Salt and Pepper Chips.
      </Card>
      <p className="content menu-content">
        <a href={menuPDF} target="_blank" rel="noopener noreferrer">
          Click to view Menu
        </a>
      </p>
    </div>
  );
}

export default Menu;
