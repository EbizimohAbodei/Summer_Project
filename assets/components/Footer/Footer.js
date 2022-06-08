import React from "react";
import ReactDom from "react-dom/client";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div>
          <h2>Team EOT Summer Project</h2>
        </div>
        <div>
          <h3>
            All content displayed on this platform is used purely for educational purposes
            only
          </h3>
        </div>
        <div>
          <h3>
            &copy; 2022{" "}
            <a href="https://open-api.myhelsinki.fi/terms" target="_blank">
              Helsinki open API
            </a>{" "}
            and Affiliates
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
