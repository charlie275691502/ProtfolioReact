import ContactIcons from "./ContactIcons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark footer-container">
      <ContactIcons />
      <div>
        <p style={{ color: "white" }}>
          &copy; 2024 Charlie Wu. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
