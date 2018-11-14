import React from 'react';
import styles from '../styles.css'
const PostData = (props) => {
  const date = props.data.date
  const author = props.data.author
  return (
    <div className={styles.articlePostData}>
      <div>
        Date:<span>{date}</span>
      </div>
      <div>
        Author:<span>{author}</span>
      </div>
    </div>
  );
};

export default PostData;