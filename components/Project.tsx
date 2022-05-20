import Image from "next/image";

interface ProjectProps {
  imgSide: boolean;
}

interface ImageProps {
  image: string;
}

export default function Project(props) {
  // alternating cards projects view
  const [left, right] = props.imgSide
     ? [<ProjectDesc {...props} />, <ProjectImage {...props} />]
     : [<ProjectImage {...props} />, <ProjectDesc {...props} />];

     return ();
}

function ProjectImage(props) {
  return (
    <Image
      src={`/images/${props.image}`}
      layout="fill"
      objectFit="contain"
    />
  )
}