import { Link } from "react-router-dom";
import styles from "./link-button.module.css";
const LinkButton = ({ width, title, to, color }) => {
  let linkColor;
  switch (color) {
    case "red":
      linkColor = styles.red;
      break;
    case "green":
      linkColor = styles.green;
      break;
    case "yellow":
      linkColor = styles.yellow;
      break;
    case "blue":
      linkColor = styles.blue;
      break;
    case "twitter":
      linkColor = styles.twitter;
      break;

    default:
      linkColor = styles.twitter;
      break;
  }
  return (
    <Link
      style={width && { width: width }}
      to={to}
      className={`${styles.linkButton} ${linkColor}`}
    >
      {title || "Link"}
    </Link>
  );
};

export default LinkButton;
