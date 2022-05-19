import Image from "next/image";

export function Navbar() {
  return (
    <nav id="navbar-main" className="navbar is-fixed-top is-dark">
      <div className="navbar-brand">
        {/* <h1 className="title has-text-light"> */}
        <Image src="/images/cube.png" width={50} height={50} alt="Home" />
        {/* </h1> */}
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">hi</div>
        </div>
      </div>
    </nav>
  );
}
