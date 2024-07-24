import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className=" flex justify-center w-full bg-base-200 p-10">
      <footer className="footer  text-base-content sm:max-w-[1400px] sm:px-[2rem]">
        <aside>
          <img className="w-[150px]" src={Logo} alt="" />
          <p>
            Lustria
            <br />
            Providing reliable service since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Important Links</h6>
          <Link to="/products" className="link link-hover">
            Products
          </Link>
          <Link to="/dashboard" className="link link-hover">
            Dashboard
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
