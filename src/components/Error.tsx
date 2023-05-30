import { FC } from 'react';

type Props = {
  error: string | null;
};

const Error: FC<Props> = ({ error }) => (
  <div className="d-flex justify-content-center">{`Error: ${error}`}</div>
);

export default Error;
