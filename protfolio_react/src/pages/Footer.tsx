import EmailIcon from "../components/EmailIcon";
import GithubIcon from "../components/GithubIcon";
import LinkedinIcon from "../components/LinkedinIcon";

const Footer = () => {
  return (
    <div className="bg-dark footer-container">
      <div>
        <GithubIcon url="https://github.com/charlie275691502" />
        <LinkedinIcon url="https://www.linkedin.com/in/chia-ho-wu-84bab726a" />
        <EmailIcon email="charlie275691502@gmail.com" />
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
