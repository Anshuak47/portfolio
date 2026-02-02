import TalkButton from "./TalkButton";

const ResponsiveNav = () => {
  return (
    <div className="mobile-menu" id="mobile-menu">
      <ul className="mobile-nav flex flex-col conte">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="talk p-2.5">
        <TalkButton />
      </div>
    </div>
  );
};

export default ResponsiveNav;
