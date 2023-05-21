import { FC, useState } from 'react';

import { avatar } from '../assets';
import { TPost } from '../types';

const Post: FC<TPost> = ({ title, body, comments }) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState<boolean>(false);

  const toggleComments = () => {
    setIsCommentsVisible((prev) => !prev);
  };

  return (
    <div>
      <h2>{title}</h2>
      <img src={avatar} alt="user image" />
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
