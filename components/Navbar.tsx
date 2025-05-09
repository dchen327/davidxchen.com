import Image from "next/image";
import { useState } from "react";
import { animateScroll, scroller } from "react-scroll";

const scrollConfig = {
  duration: 500,
  smooth: true,
  offset: -30,
};

export function Navbar() {
  // navbar burger
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <nav id="navbar-main" className="navbar is-fixed-top is-dark is-size-5">
      <div className="navbar-brand">
        <Image
          className="p-1 ml-1"
          src="/images/cube.png"
          width={50}
          height={50}
          alt="Home"
          style={{ borderRadius: "50%" }}
          onClick={() => animateScroll.scrollToTop({ duration: 500 })}
        />
        <a
          className={`navbar-burger ${active && "is-active"}`}
          role="button"
          aria-label="menu"
          aria-expanded="false"
          onClick={handleToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        className={`navbar-menu has-text-light ${active && "is-active"}`}
        onClick={() => setActive(false)}
      >
        <div className="navbar-end">
          <a
            className="navbar-item px-4 mx-1"
            onClick={() => animateScroll.scrollToTop({ duration: 500 })}
          >
            Home
          </a>
          <a
            className="navbar-item px-4 mx-1"
            onClick={() => scroller.scrollTo("About", scrollConfig)}
          >
            About
          </a>
          <a
            className="navbar-item px-4 mx-1"
            onClick={() => scroller.scrollTo("Experience", scrollConfig)}
          >
            Experience
          </a>
          <a
            className="navbar-item px-4 mx-1"
            onClick={() => scroller.scrollTo("Projects", scrollConfig)}
          >
            Projects
          </a>
          <a
            className="navbar-item px-4 mx-1"
            onClick={() => scroller.scrollTo("Skills", scrollConfig)}
          >
            Skills
          </a>
          <a
            className="navbar-item px-4 mx-1"
            href="https://www.goodreads.com/user/show/102476193-david"
            target="_blank"
            rel="noreferrer"
          >
            Books
          </a>
          <a
            className="navbar-item px-4 mx-1"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
