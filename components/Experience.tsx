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
      <div className="container" style={{ width: "80%" }}></div>
    </section>
  );
}
