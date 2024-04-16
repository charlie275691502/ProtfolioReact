import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactIcons = () => {
  return (
    <div>
      <button type="button" className="btn">
        <a href="https://github.com/charlie275691502">
          <FaGithub className="icon" fill="white" />
        </a>
      </button>
      <button type="button" className="btn">
        <a href="https://www.linkedin.com/in/chia-ho-wu-84bab726a">
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
