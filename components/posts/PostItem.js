import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './postItem.module.css';

const PostItem = props => {
  const {title, image, excerpt, date, slug} = props.post;

  // make date more human readable
  const formattedDate = new Date(date).toLocaleDateString('en-Us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

// construct a full imagePath (because the file name is not enough.)

const imagePath = `/images/posts/${slug}/${image}`

  return (
    <li className={styles.post}>
      <Link href>
        <a>
          <div className={styles.image}>
            <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
