import Typist from "react-typist";

export default function Splash() {
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
            <Typist>
              <Typist.Delay ms={300} />
              Software Engineer
            </Typist>
          </p>
        </div>
      </div>
    </section>
  );
}
