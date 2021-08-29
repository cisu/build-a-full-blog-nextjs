import React from 'react';
import styles from './postContent.module.css';
import PostHeader from './PostHeader';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  content: '# This is a first post'
};

const PostContent = () => {

    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
