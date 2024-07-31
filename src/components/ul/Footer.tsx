import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className=" flex justify-center w-full bg-base-200 p-10">
      <footer className="footer  text-base-content sm:max-w-[1400px] sm:px-[2rem]">
        <aside>
          <img className="w-[150px]" src={Logo} alt="" />
          <p>
            Lustria is an online nursery plant shop offering a diverse selection
            of high-quality plants and gardening essentials. Dedicated to
            helping plant enthusiasts and gardeners cultivate vibrant, healthy
            gardens, Lustria provides a seamless shopping experience with expert
            advice, fast delivery, and exceptional customer service.
          </p>
        </aside>
        {/* <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> */}
        <nav>
          <h6 className="footer-title">Important Links</h6>
          <Link to="/" className="link link-hover">
            Home Page
          </Link>
          <Link to="/products" className="link link-hover">
            Products
          </Link>
          <Link to="/dashboard" className="link link-hover">
            Dashboard
          </Link>
          <Link to="/cart" className="link link-hover">
            Cart
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
