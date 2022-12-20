import React from "react";
import s from "./MyPost.module.scss";
import Post from "./Post/Post";

function MyPost(props) {
  let postElements = props.state.map((p, index) => (
    <Post message={p.message} key={index} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    const action = { type: "ADD-POST" };
    props.dispatch(action);
  };

  let addSign = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    const action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <div className={s.mypost}>
      <textarea
        onChange={(e) => onPostChange(e)}
        ref={newPostElement}
        value={props.newPostText}
      />
      <div>
        <button onClick={addPost}>Add me</button>
        <button onClick={addSign}>Sign in</button>
      </div>
      <p className={s.item}>Sagol</p>

      {postElements}
      {/* <Post message={postData[0].message} />
      <Post message={postData[1].message} /> */}
    </div>
  );
}

export default MyPost;
