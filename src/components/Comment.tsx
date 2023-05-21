import { FC } from 'react';

import { TComment } from '../types';

const Comment: FC<TComment> = ({ id, name, body, email }) => (
  <div key={id}>
    <h4>{`${name} (${email}) `}</h4>
    <p>{body}</p>
  </div>
);

export default Comment;
