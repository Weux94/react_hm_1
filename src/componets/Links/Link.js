import "./Link.css";
const Link = ( props) => {
  return (
      <a href="https://www.google.com/" className="link-btn" target="_blank" >
       <span className="ico-header"> {props.ico}</span><span className="text">{props.text}</span>
      </a>
  );
};

export default Link;
