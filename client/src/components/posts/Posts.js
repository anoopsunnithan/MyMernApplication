import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Posts = ({ getPosts, posts: { post, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return <div>ba</div>;
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.posts,
});

export default connect(mapStateToProps, { getPosts })(Posts);
