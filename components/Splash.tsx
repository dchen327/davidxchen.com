import { Fade } from "react-awesome-reveal";
import Typist from "react-typist";
import TypistLoop from "./TypistLoop";

export default function Splash() {
  const subtitleWords = [
    "Software Engineering",
    "Mathematics",
    "Web Development",
    "Artificial Intelligence",
    "Automation",
    "Statistics",
    "Robotics",
    "Product Management",
  ];

  return (
    <section
      className="hero is-fullheight-with-navbar"
      style={{
        backgroundImage: `url(/images/Tropical-sunset.png)`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-body">
        <div className="container">
          <Fade>
            <h1
              className="title has-text-light mb-2"
              style={{ fontSize: "65px" }}
            >
              David Chen
            </h1>
          </Fade>
          <h2 className="title has-text-light ml-1 has-text-weight-light">
            <TypistLoop words={subtitleWords} />
          </h2>
        </div>
      </div>
    </section>
  );
}
