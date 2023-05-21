import { FC, useState } from 'react';

type Comment = {
  title: string;
  text: string;
};

type TPost = {
  post: {
    title: string;
    userImg: string;
    text: string;
    comments: Comment[];
  };
};

const Post: FC<TPost> = ({ post }) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState<boolean>(false);

  const toggleComments = () => {
    setIsCommentsVisible((prev) => !prev);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.userImg} alt="user image" />
      <p>{post.text}</p>

      <button type="button" onClick={() => toggleComments()}>
        Comments
      </button>

      {isCommentsVisible && (
        <div>
          {post.comments.map((comment) => (
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
