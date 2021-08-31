import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostsData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const {data, content} = matter(fileContent);

  const postSlug = fileName.replace(/\.md/, ''); // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

// read all post i file directory
function getAllPosts() {
  const postsFiles = fs.readdirSync(postsDirectory);

  //   for (const postFile of postFiles) {
  //     const postData = getPostData(postFile);
  //   }

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  // sort post greater post front older post last
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}
