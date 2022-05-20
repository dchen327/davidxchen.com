import Image from "next/image";

interface ProjectProps {
  image: string;
  title: string;
  excerpt: string;
  url: string;
  imgSide: boolean;
  key: number;
}

export default function Project(props: ProjectProps) {
  // alternating cards projects view
  const [left, right] = props.imgSide
    ? [<ProjectDesc {...props} />, <ProjectImage {...props} />]
    : [<ProjectImage {...props} />, <ProjectDesc {...props} />];

  return (
    <div className="columns">
      <div className={"column is-" + (props.imgSide ? 8 : 4)}>{left}</div>
      <div className={"column is-" + (props.imgSide ? 4 : 8)}>{right}</div>
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
    <>
      <h1 className="title is-2 has-text-centered has-text-light pb-3">
        {props.title}
      </h1>
    </>
  );
}
