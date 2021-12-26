import { Grid, Paper, Grow, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
