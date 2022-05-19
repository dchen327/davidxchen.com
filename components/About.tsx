import Image from "next/image";

export default function About() {
  return (
    <section className="section has-background-dark">
      <h1 className="title is-2 has-text-centered has-text-light pb-3">
        About Me
      </h1>
      <div className="container" style={{ width: "70%" }}>
        <div className="columns has-text-light has-text-centered">
          {/* relative position to make image fill work */}
          <div className="column is-4" style={{ position: "relative" }}>
            <Image
              src="/images/david.jpg"
              layout="fill"
              objectFit="contain"
              alt="david.png"
            />
          </div>
          <div className="column is-8">
            <p className="content is-size-5 py-4 my-4">
              {
                "Hi! I'm a Computer Science and Math lover, and am very interested in AI/ML."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
