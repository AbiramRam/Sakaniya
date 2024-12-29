import Logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
      <nav className="mb-0 flex items-center justify-between py-0">
          <div className="flex flex-Shrink-0 items-center">
              <img src={Logo} alt=""/>
          </div>

          <div className="m-8 flex items-right justify-between gap-10 text-2xl">
              <FaLinkedin/>
              <FaFacebook/>
              <FaGithub/>
              <FaInstagram/>
          </div>
      </nav>
  );
}

export default NavBar
