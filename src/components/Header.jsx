/* components */
import Navbar from "./Navbar";

/* node modules */
import { useState } from "react";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-5">
        <h1 className="col-span-1">
          <a href="/" className="logo">
            <img src="/logo4.ico" width={40} height={40} alt="Jerin&apos;s Canvas" />
          </a>
        </h1>

        <div className="relative md:justify-self-center md:col-span-3">
          <button className="menu-btn md:hidden" onClick={() => setNavOpen ((prev) => !prev)}>
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a 
        href="#contact" 
        className="btn btn-secondary max-md:hidden md:justify-self-end md:col-span-1">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
