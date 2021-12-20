import { useState } from "react";
import { createPost } from "../actions/post";
import { useDispatch } from "react-redux";

const CreatePost = () => {
  const [postModel, setPostModel] = useState({
    title: "test",
    message: "ok lets go",
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPost(postModel));
    console.log(postModel);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Basliq</label>
      <input
        type="text"
        onChange={(e) => setPostModel({ ...postModel, title: e.target.value })}
      />
      <label>Mesaj</label>
      <input
        type="text"
        onChange={(e) =>
          setPostModel({ ...postModel, message: e.target.value })
        }
      />
      <button>Təsdiq</button>
    </form>
  );
};

export default CreatePost;
