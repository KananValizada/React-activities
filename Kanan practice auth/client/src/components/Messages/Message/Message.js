import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";
import moment from "moment";

const Message = (message) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6">{message.name}</Typography>
        <Typography variant="body2">
          {moment(message.createdAt).fromNow()}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {message.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message.content}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="secondary">
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Message;
