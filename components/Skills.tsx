import Divider from "./Divider";

export default function Skills() {
  return (
    <section className="section has-background-dark">
      <h1 className="title is-2 has-text-centered has-text-light">
        Skills and Technologies
      </h1>
      <Divider />
      <div className="columns is-centered">
        <div className="content has-text-light is-size-5">
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
        </div>
      </div>
    </section>
  );
}
