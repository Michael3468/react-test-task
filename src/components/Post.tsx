import { FC, useState } from 'react';

import { TPost } from '../types';

const Post: FC<TPost> = ({ title, userImg, body, comments }) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState<boolean>(false);

  const toggleComments = () => {
    setIsCommentsVisible((prev) => !prev);
  };

  return (
    <div>
      <h2>{title}</h2>
      <img src={userImg} alt="user image" />
      <p>{body}</p>

      <button type="button" onClick={() => toggleComments()}>
        Comments
      </button>

      {isCommentsVisible && (
        <div>
          {comments.map((comment) => (
            <div>
              <h4>{comment.title}</h4>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
