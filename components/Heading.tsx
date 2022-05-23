import { Fade } from "react-awesome-reveal";

export default function Heading({
  text,
  isLight = false,
}: {
  text: string;
  isLight?: boolean;
}) {
  return (
    <Fade>
      <h1
        className={`title is-2 has-text-centered ${
          isLight && "has-text-light"
        }`}
      >
        {text}
      </h1>
    </Fade>
  );
}
