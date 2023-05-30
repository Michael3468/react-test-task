import { FC } from 'react';
import { ThreeCircles, Comment, ThreeDots } from 'react-loader-spinner';

type TLoaderType = 'three-circles' | 'comment' | 'three-dots';

type Props = {
  loaderType?: TLoaderType;
  height?: number;
  width?: number;
};

const Loader: FC<Props> = ({ loaderType = 'three-circles', height = 50, width = 50 }) => {
  switch (loaderType) {
    case 'three-circles':
      return (
        <ThreeCircles
          height={height}
          width={width}
          color="#4fa94d"
          ariaLabel="three-circles-rotating"
        />
      );
    case 'comment':
      return (
        <Comment
          height={height}
          width={width}
          ariaLabel="comment-loading"
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
      );
    case 'three-dots':
      return (
        <ThreeDots
          height={height}
          width={width}
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
        />
      );
    default:
      return <ThreeCircles height={height} width={width} ariaLabel="three-circles-rotating" />;
  }
};

export default Loader;
