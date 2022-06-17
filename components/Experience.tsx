import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Divider from "./Divider";
import Heading from "./Heading";

export default function Experience() {
  return (
    <section
      id="Experience"
      className="section has-text-light"
      style={{ backgroundColor: "#25274D" }}
    >
      <Heading text="Industry Experience" />
      <Divider />
      <div
        className="columns my-2 has-text-centered has-background-white"
        style={{ borderRadius: "20px" }}
      >
        <div
          className="column mx-3 my-3"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <Fade>
            <Image
              src="/images/slingshot.png"
              layout="fill"
              objectFit="contain"
              alt="slingshot.png"
            />
          </Fade>
        </div>
        <div
          className="column mx-3 my-3"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <Fade delay={200}>
            <Image
              src="/images/scout.png"
              layout="fill"
              objectFit="contain"
              alt="scout.png"
            />
          </Fade>
        </div>
        <div
          className="column mx-3 my-3"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <Fade delay={400}>
            <Image
              src="/images/cssi.jpg"
              layout="fill"
              objectFit="contain"
              alt="cssi.jpg"
            />
          </Fade>
        </div>
        <div
          className="column mx-3 my-3"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <Fade delay={600}>
            <Image
              src="/images/hireflow.png"
              layout="fill"
              objectFit="contain"
              alt="hireflow.png"
            />
          </Fade>
        </div>
        <div
          className="column mx-3 my-3"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <Fade delay={800}>
            <Image
              src="/images/google.png"
              layout="fill"
              objectFit="contain"
              alt="google.png"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}
