import Image from "next/image";

interface ProjectProps {
  image: string;
  title: string;
  excerpt: string;
  url: string;
  imgSide: boolean;
  key: number;
}

// TODO: fix mobile columns (pictures too small)
export default function Project(props: ProjectProps) {
  // alternating cards projects view
  const [left, right] = props.imgSide
    ? [
        <ProjectDesc {...props} key={props.key} />,
        <ProjectImage {...props} key={props.key} />,
      ]
    : [
        <ProjectImage {...props} key={props.key} />,
        <ProjectDesc {...props} key={props.key} />,
      ];

  return (
    <div className="columns is-mobile py-4 my-4 mx-2">
      <div
        className={"column mx-2 is-" + (props.imgSide ? 8 : 4)}
        style={{ position: "relative" }}
      >
        {left}
      </div>
      <div
        className={"column mx-2 is-" + (props.imgSide ? 4 : 8)}
        style={{ position: "relative" }}
      >
        {right}
      </div>
    </div>
  );
}

function ProjectImage(props: ProjectProps) {
  return (
    <Image
      src={`/images/${props.image}`}
      layout="fill"
      objectFit="contain"
      alt={props.image}
    />
  );
}

function ProjectDesc(props: ProjectProps) {
  return (
    <div
      className="p-4"
      style={{
        marginTop: "5rem",
        marginBottom: "5rem",
        border: "2px solid",
        borderRadius: "10px",
        boxShadow: "",
      }}
    >
      <h1 className="title is-4 has-text-light has-text-weight-medium pb-3">
        {props.title}
      </h1>
      <h2 className="title is-5 has-text-light has-text-weight-light">
        {props.excerpt}
      </h2>
      <a
        className="button is-success"
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        Source Code
      </a>
    </div>
  );
}
