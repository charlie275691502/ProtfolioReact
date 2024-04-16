import ContactIcons from "./ContactIcons";

const Footer = () => {
  return (
    <div className="bg-dark footer-container">
      <div>
        <ContactIcons />
      </div>
      <div>
        <p style={{ color: "white" }}>
          &copy; 2024 Charlie Wu. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
