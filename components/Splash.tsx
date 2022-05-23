import Typist from "react-typist";
import TypistLoop from "./TypistLoop";

export default function Splash() {
  const subtitleWords = [
    "Software Engineering",
    "Math",
    "Web Development",
    "Artificial Intelligence",
    "Automation",
    "Statistics",
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
          <p className="title has-text-light mb-2" style={{ fontSize: "65px" }}>
            David Chen
          </p>
          <p className="title has-text-light ml-1 has-text-weight-light">
            <TypistLoop words={subtitleWords} />
          </p>
        </div>
      </div>
    </section>
  );
}
