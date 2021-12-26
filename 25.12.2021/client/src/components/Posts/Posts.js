import { Grid, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../actions/posts";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("yyy");
  console.log(posts);

  const onDelete = (id) => {
    //console.log(id);
    dispatch(deletePost(id));
    navigate("/");
  };

  return !posts.length ? (
    <p>Post Yoxdur</p>
  ) : (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} md={6} lg={3} key={post._id}>
          <Paper>
            <p>{post.title}</p>
            <p>{post.message}</p>
            <button onClick={() => onDelete(post._id)}>Delete</button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
