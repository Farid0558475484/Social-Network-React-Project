// import React from "react";
import {
  addSignActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },

    addPost: () => {
      dispatch(addSignActionCreator());
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
