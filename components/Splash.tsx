export default function Splash() {
  // return (
  //   <div
  //     style={{
  //       // backgroundImage: `url(/images/background.jpg)`,
  //       backgroundImage: `url(/images/Tropical-sunset.png)`,
  //       height: "105vh",
  //       backgroundSize: "cover",
  //     }}
  //   >
  //     <h1 className="title has-text-light"> David Chen </h1>
  //   </div>
  // );
  return (
    <section
      className="hero is-fullheight-with-navbar"
      style={{
        backgroundImage: `url(/images/Tropical-sunset.png)`,
        height: "90vh",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-body">
        <div className="title has-text-light">David Chen</div>
      </div>
    </section>
  );
}
