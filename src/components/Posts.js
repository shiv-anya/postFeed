import classes from "./Posts.module.css";
import Card from "./UI/Card";
import user from "../Assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Posts = (props) => {
  return (
    <div className={classes.newscard}>
      <Card className={classes.card}>
        <img src={user} alt="news thumbnail" />
        <div>
          <h2>{props.title}</h2>
          <p>{props.body}</p>
          <p className={classes.date}>Mon 26 Dec 2020 14:57 GMT</p>
        </div>
      </Card>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </div>
    </div>
  );
};

export default Posts;
