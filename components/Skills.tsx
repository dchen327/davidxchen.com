import { Fade } from "react-awesome-reveal";
import Divider from "./Divider";
import Heading from "./Heading";

export default function Skills() {
  return (
    <section id="Skills" className="section has-background-link-light">
      <Heading text="Skills and Technologies" />
      <Divider />
      <div className="columns is-centered">
        <div className="content is-size-5">
          <Fade cascade delay={300}>
            <ul>
              <li>
                <b>Programming Languages:</b> Fluent in Python; Familiar with
                HTML/CSS/JS, TypeScript, Swift, Java, C/C++, SQL
              </li>
              <li>
                <b>Technologies:</b> React, React Native, Next.js, Firebase,
                Flask, Node.js, TensorFlow, Pandas, Selenium, Git, Linux, Latex
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </section>
  );
}
