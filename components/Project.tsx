import Image from "next/image";
import { createMedia } from "@artsy/fresnel";

interface ProjectProps {
  image: string;
  title: string;
  excerpt: string;
  url: string;
  imgSide: boolean;
}

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920,
  },
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

export default function Project(props: ProjectProps) {
  return ();
}

// desktop: side by side, alternating image and description
function ProjectDesktop(props: ProjectProps) {
  // alternating cards projects view
  const [left, right] = props.imgSide
    ? [<ProjectDesc {...props} key={1} />, <ProjectImage {...props} key={2} />]
    : [<ProjectImage {...props} key={1} />, <ProjectDesc {...props} key={2} />];

  return (
    <div className="columns is-desktop py-4 my-4 mx-2">
      <div
        className={"column mx-2 is-" + (props.imgSide ? 8 : 4)}
        style={{ position: "relative", minHeight: "200px" }}
      >
        {left}
      </div>
      <div
        className={"column mx-2 is-" + (props.imgSide ? 4 : 8)}
        style={{ position: "relative", minHeight: "200px" }}
      >
        {right}
      </div>
    </div>
  );
}

function ProjectMobile(props: ProjectProps) {
  // alternating cards projects view
  const [left, right] = props.imgSide
    ? [<ProjectDesc {...props} key={1} />, <ProjectImage {...props} key={2} />]
    : [<ProjectImage {...props} key={1} />, <ProjectDesc {...props} key={2} />];

  return (
    <div className="columns is-desktop py-4 my-4 mx-2">
      <div
        className={"column mx-2 is-" + (props.imgSide ? 8 : 4)}
        style={{ position: "relative", minHeight: "200px" }}
      >
        {left}
      </div>
      <div
        className={"column mx-2 is-" + (props.imgSide ? 4 : 8)}
        style={{ position: "relative", minHeight: "200px" }}
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
