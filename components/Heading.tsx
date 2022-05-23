import { Fade } from "react-awesome-reveal";

export default function Heading({ text }: { text: string }) {
  return (
    <Fade>
      <h1 className="title is-2 has-text-centered has-text-light">{text}</h1>
    </Fade>
  );
}
