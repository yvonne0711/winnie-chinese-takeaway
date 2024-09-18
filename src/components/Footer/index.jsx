import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div>
        <span className="footer-disclaim">
          We do not have any social media. This website is our only platform.
        </span>
        {/* grid layout */}
        <section className="container text-md-start">
          {/* row  */}
          <div className="row justify-content-around">
            <div className="col-md-3 col-lg-4 col-xl-3 mb-3">
              <h6 className="text-uppercase fw-bold">Location</h6>
              <ul>
                <li className="list-group-item">
                  114 Thorpe Street
                </li>
                <li className="list-group-item">
                  Thorpe Hesley
                </li>
                <li className="list-group-item">
                  Rotherham
                </li>
                <li className="list-group-item">
                  S61 2RP
                </li>
                <li className="list-group-item">
                  <span>0114 245 7088</span>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-3 mb-3">
              <h6 className="text-uppercase fw-bold">
                Opening Hours
                </h6>
              <ul>
                <li className="list-group-item">
                  Tuesday - Sunday: 17:30 - 21:00
                </li>
                <li className="list-group-item">
                  Monday: Closed
                  </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* copyright */}
      <div className="text-center footer-copyright">
        Copyright &copy; 2024 Winnie Chinese Takeaway
      </div>
    </footer>
  );
}

export default Footer;
