import Image from "next/image";
import { createMedia } from "@artsy/fresnel";
import { Slide, Fade } from "react-awesome-reveal";

interface ProjectProps {
  image: string;
  title: string;
  excerpt: string;
  sourceCode?: string;
  demo?: string;
  imgSide: boolean;
  mobile?: boolean;
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
  return (
    <MediaContextProvider>
      <Media at="mobile">
        <ProjectMobile {...props} />
      </Media>
      <Media greaterThan="mobile">
        <ProjectDesktop {...props} />
      </Media>
    </MediaContextProvider>
  );
}

// desktop: side by side, alternating image and description
function ProjectDesktop(props: ProjectProps) {
  // alternating cards projects view
  const [left, right] = props.imgSide
    ? [<ProjectDesc {...props} key={1} />, <ProjectImage {...props} key={2} />]
    : [<ProjectImage {...props} key={1} />, <ProjectDesc {...props} key={2} />];

  return (
    <div className="columns py-4 my-4 mx-2">
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
  // description, then image under
  return (
    <div className="columns">
      <div
        className="column"
        style={{ position: "relative", minHeight: "200px" }}
      >
        <ProjectImage {...props} />
      </div>
      <div className="column">
        <ProjectDesc {...props} mobile={true} />
      </div>
    </div>
  );
}

function ProjectImage(props: ProjectProps) {
  return (
    <Fade triggerOnce={true} delay={750} fraction={1}>
      <Image
        src={`/images/${props.image}`}
        layout="fill"
        objectFit="contain"
        alt={props.image}
      />
    </Fade>
  );
}

function ProjectDesc(props: ProjectProps) {
  return (
    <Slide direction={props.imgSide ? "left" : "right"}>
      <div
        className="p-4"
        style={{
          marginTop: props.mobile ? "1rem" : "5rem",
          marginBottom: "5rem",
          border: "0.5px solid",
          borderRadius: "10px",
        }}
      >
        <h1
          className={
            "title has-text-weight-medium is-" + (props.mobile ? 5 : 3)
          }
        >
          {props.title}
        </h1>
        <h2
          className={
            "title has-text-weight-normal is-" + (props.mobile ? 6 : 5)
          }
        >
          {props.excerpt}
        </h2>
        {props.sourceCode && (
          <a
            className="button is-success mr-2"
            href={props.sourceCode}
            target="_blank"
            rel="noreferrer"
            style={{ borderRadius: "10px" }}
          >
            Source Code
          </a>
        )}
        {props.demo && (
          <a
            className="button is-info"
            href={props.demo}
            target="_blank"
            rel="noreferrer"
            style={{ borderRadius: "10px" }}
          >
            Demo
          </a>
        )}
      </div>
    </Slide>
  );
}
