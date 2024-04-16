import EmailButton from "../components/EmailButton";
import GithubButton from "../components/GithubButton";
import LinkedinButton from "../components/LinkedinButton";

const Footer = () => {
  return (
    <div className="bg-dark footer-container">
      <div>
        <GithubButton />
        <LinkedinButton />
        <EmailButton />
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
