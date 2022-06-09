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
      <Heading text="Industry Experience" />
      <Divider />
      <div
        className="columns my-2 has-text-centered has-background-white"
        style={{ borderRadius: "20px" }}
      >
        <div
          className="column my-3"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <Image
            src="/images/slingshot.png"
            layout="fill"
            objectFit="contain"
            alt="slingshot.png"
          />
        </div>
        <div
          className="column my-3"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <Image
            src="/images/scout.png"
            layout="fill"
            objectFit="contain"
            alt="scout.png"
          />
        </div>
        <div
          className="column my-3"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <Image
            src="/images/cssi.jpg"
            layout="fill"
            objectFit="contain"
            alt="cssi.jpg"
          />
        </div>
        <div
          className="column my-3"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <Image
            src="/images/hireflow.png"
            layout="fill"
            objectFit="contain"
            alt="hireflow.png"
          />
        </div>
        <div
          className="column my-3"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <Image
            src="/images/google.png"
            layout="fill"
            objectFit="contain"
            alt="google.png"
          />
        </div>
      </div>
    </section>
  );
}
