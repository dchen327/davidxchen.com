import Image from "next/image";
import { animateScroll, scroller } from "react-scroll";

const scrollConfig = {
  duration: 500,
  smooth: true,
  // offset: -10,
};

export function Navbar() {
  return (
    <nav id="navbar-main" className="navbar is-fixed-top is-dark is-size-5">
      <div className="navbar-brand">
        <Image src="/images/cube.png" width={50} height={50} alt="Home" />
      </div>
      <div className="navbar-menu">
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
          <a className="navbar-item px-4 mx-1">Projects</a>
          <a className="navbar-item px-4 mx-1">Skills</a>
          <a
            className="navbar-item px-4 mx-1"
            href="https://www.notion.so/Reading-List-29598ddba9b840ada60aaaf47e964c15"
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
