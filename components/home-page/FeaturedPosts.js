import React from 'react';
import PostsGrid from '../posts/PostsGrid';
import styles from './featuredPosts.module.css';

const FeaturedPosts = props => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      {/* the posts is the name we give into PostsGrid component */}
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
