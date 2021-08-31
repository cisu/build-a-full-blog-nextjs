import {Fragment} from 'react';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import Hero from '../components/home-page/Hero';



function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero section => Present ourselves
// 2) Featured Posts
