import ContactIcons from "./ContactIcons";

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
