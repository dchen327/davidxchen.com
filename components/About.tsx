import Image from "next/image";
import Link from "next/link";
import Divider from "./Divider";

export default function About() {
  return (
    <section id="About" className="section has-background-dark">
      <h1 className="title is-2 has-text-centered has-text-light">About Me</h1>
      <Divider />
      <div className="container" style={{ width: "80%" }}>
        <div className="columns is-mobile has-text-light has-text-centered">
          {/* relative position to make image fill work */}
          <div className="column is-4" style={{ position: "relative" }}>
            <Image
              src="/images/david.jpg"
              layout="fill"
              objectFit="contain"
              alt="david.png"
            />
          </div>
          <div className="column is-8 is-size-5 has-text-left">
            <p className="content pt-3 mt-3">
              {
                "Hi! I'm a Computer Science and Math lover, and am very interested in AI/ML."
              }
            </p>
            <p className="content">
              I like building websites with React, and writing fun programs in
              Python—feel free to check out some my projects below!
            </p>
            <p className="content">
              Or glance through some of the{" "}
              <Link
                href="https://www.notion.so/Reading-List-29598ddba9b840ada60aaaf47e964c15"
                passHref
              >
                books
              </Link>{" "}
              {"I've read beginning in high school."}
            </p>
            <p className="content">
              {
                "I'm currently a sophomore at Harvey Mudd College in Claremont, CA."
              }
            </p>
            <div className="mb-6">
              <a
                className="button mr-5 is-info"
                href="https://www.linkedin.com/in/dchen327/"
              >
                <span className="icon">
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
              <a
                className="button mr-5 is-black"
                href="https://github.com/dchen327"
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
          </div>
        </div>
      </div>
    </section>
  );
}
