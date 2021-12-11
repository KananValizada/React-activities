import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";
const Messages = () => {
  const classes = useStyles();
  const messages = useSelector((state) => state.message);
  console.log(messages);
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {messages.map((message) => (
        <Grid key={message._id} item>
          {/* <Message message={message} /> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default Messages;
