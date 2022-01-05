import Card from "./UI/Card";
import image from "../Assets/user.png";
import classes from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className={classes.aside}>
      <Card className={`${classes.author} ${classes.card}`}>
        <img src={image} alt="author" />
        <div>
          <h2>Hi, Reader,</h2>
          <p>Here's your News!</p>
        </div>
      </Card>
      <Card className={`${classes.card} ${classes.togglecard}`}>
        <h2>View Toggle</h2>
        <div className={classes.toggle}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faNewspaper} size="2x" />
          </div>
          <div className={`${classes.icon}`}>
            <FontAwesomeIcon icon={faList} size="2x" />
          </div>
        </div>
      </Card>
      <Card className={`${classes.card} ${classes.feedback}`}>
        <h2>Have a feedback?</h2>
        <button>We're Listening!</button>
      </Card>
    </div>
  );
};

export default Sidebar;
