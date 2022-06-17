import Image from "next/image";
import Link from "next/link";
import Divider from "./Divider";
import { Fade } from "react-awesome-reveal";
import Heading from "./Heading";

export default function About() {
  return (
    <section
      id="About"
      className="section has-text-light"
      style={{ backgroundColor: "#25274D" }}
    >
      <Heading text="About Me" isLight={true} />
      <Divider />
      <div className="container" style={{ width: "80%" }}>
        <div className="columns has-text-centered">
          {/* relative position to make image fill work */}
          <div
            className="column is-4 m-2"
            style={{
              position: "relative",
              minHeight: "200px",
            }}
          >
            <Image
              src="/images/david.jpg"
              layout="fill"
              objectFit="contain"
              alt="david.png"
            />
          </div>
          <div className="column is-8 is-size-5 has-text-left">
            <Fade cascade triggerOnce childClassName="content pt-3 mt-3">
              <p>
                {
                  "Hi! I'm a Computer Science and Math lover, and am very interested in AI/ML."
                }
              </p>
              <p>
                I like building websites with React, and writing fun programs in
                Python—feel free to check out some my projects below!
              </p>
              <p>
                Or glance through some of the{" "}
                <Link
                  href="https://www.notion.so/Reading-List-29598ddba9b840ada60aaaf47e964c15"
                  passHref
                >
                  <a style={{ color: "#05c880" }}>books</a>
                </Link>{" "}
                {"I've read beginning in high school."}
              </p>
              <p>
                {
                  "I'm currently a sophomore at Harvey Mudd College in Claremont, CA."
                }
              </p>
              <div className="mb-6">
                <a
                  className="button mr-5 is-info"
                  href="https://www.linkedin.com/in/dchen327/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fab fa-linkedin"></i>
                  </span>
                </a>
                <a
                  className="button mr-5 is-black"
                  href="https://github.com/dchen327"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                </a>
                <a
                  className="button mr-5 is-danger"
                  href="mailto:davidc3287@gmail.com"
                >
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
