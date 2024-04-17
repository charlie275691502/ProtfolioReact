import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactIcons = () => {
  return (
    <div className="icon-container">
      <button type="button" className="btn">
        <a
          href="https://github.com/charlie275691502"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub className="icon" fill="white" />
        </a>
      </button>
      <button type="button" className="btn">
        <a
          href="https://www.linkedin.com/in/chia-ho-wu-84bab726a"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin className="icon" fill="white" />
        </a>
      </button>
      <button
        type="button"
        className="btn"
        onClick={(e) => {
          window.location.href = "mailto:charlie275691502@gmail.com";
          e.preventDefault();
        }}
      >
        <MdOutlineEmail className="icon" fill="white" />
      </button>
    </div>
  );
};

export default ContactIcons;
