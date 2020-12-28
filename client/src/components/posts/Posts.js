import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PropTypes from 'prop-types';

const Posts = ({ getPosts, posts: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome to the community
      </p>
      {/* PostFrom */}
      <div className='posts'>
        {posts.map((post) => (
          <PostItem key={posts._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { getPosts })(Posts);
