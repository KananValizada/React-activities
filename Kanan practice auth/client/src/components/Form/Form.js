import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";
import { createMessage } from "../../actions/message";
import { useDispatch } from "react-redux";

const Form = () => {
  const [messageData, setMessageData] = useState({ title: "", content: "" });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageData);
    dispatch(createMessage(messageData));
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={messageData.title}
          onChange={(e) =>
            setMessageData({ ...messageData, title: e.target.value })
          }
        />
        <TextField
          name="content"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={messageData.content}
          onChange={(e) =>
            setMessageData({ ...messageData, content: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
