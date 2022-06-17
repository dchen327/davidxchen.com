import { Fade } from "react-awesome-reveal";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import Divider from "./Divider";
import Heading from "./Heading";

export default function Skills() {
  return (
    <section id="Skills" className="section has-background-link-light">
      <Heading text="Skills and Technologies" />
      <Divider />
      <Fade cascade delay={300} childClassName="my-4">
        <div className="columns is-centered">
          <div className="content is-size-5">
            <ul>
              <li>
                <b>Programming Languages:</b> Fluent in Python, TypeScript;
                Familiar with HTML/CSS/JS, Swift, Java, C/C++, SQL
              </li>
              <li>
                <b>Technologies:</b> React, React Native, Next.js, Firebase,
                Flask, Node.js, TensorFlow, Pandas, Selenium, Git, Linux, Latex
              </li>
            </ul>
          </div>
        </div>
        <p className="content is-size-5 has-text-centered pt-3">
          <a
            className="button mr-4 is-dark"
            href="https://github.com/dchen327"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
            <span>GitHub: @dchen327</span>
          </a>
        </p>

        <div className="columns is-centered pt-3 pb-5">
          <GitHubCalendar username="dchen327">
            <ReactTooltip html />
          </GitHubCalendar>
        </div>
      </Fade>
    </section>
  );
}
