import Image from "next/image";
import Divider from "./Divider";
import Heading from "./Heading";

export default function Experience() {
  return (
    <section
      id="Experience"
      className="section has-text-light"
      style={{ backgroundColor: "#25274D" }}
    >
      <Heading text="Experience" />
      <Divider />
      <div className="container has-background-white" style={{ width: "80%" }}>
        <div className="columns has-text-centered is-gapless">
          <div
            className="column"
            style={{ position: "relative", minHeight: "200px" }}
          >
            <Image
              src="/images/hireflow.png"
              layout="fill"
              objectFit="contain"
              alt="hireflow.png"
            />
          </div>
          <div
            className="column"
            style={{ position: "relative", minHeight: "200px" }}
          >
            <Image
              src="/images/slingshot.png"
              layout="fill"
              objectFit="contain"
              alt="slingshot.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
