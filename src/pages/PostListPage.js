import React from 'react';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import HeaderContainer from '../components/common/HeaderContainer';
import PostList from '../components/post/PostList';
import PostListContainer from '../containers/posts/PostListContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
    </>
  );
};

export default PostListPage;
