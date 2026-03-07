import React from "react";
import Logo from "./logo";
import Navlink from "../buttons/NavLink";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <Logo></Logo>
        <p className="font-medium text-accent">
          A Children kidz product website
          <br />
          Providing since 2026
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Navlink href={"/"} className="link link-hover">
          Home
        </Navlink>
        <Navlink href={"/products"} className="link link-hover">
          Products
        </Navlink>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Navlink href={"/about"} className="link link-hover">
          About us
        </Navlink>
        <Navlink href={"/contact"} className="link link-hover">
          Contact
        </Navlink>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Navlink href={"/terms"} className="link link-hover">
          Terms of use
        </Navlink>
        <Navlink href={"/privacy"} className="link link-hover">
          Privacy policy
        </Navlink>
        <Navlink href={"/cookie"} className="link link-hover">
          Cookie policy
        </Navlink>
      </nav>
    </footer>
  );
};

export default Footer;
