import Post from '../components/Post';

const Main = () => {
  const posts = [
    {
      title: 'title-1',
      text: 'post text-1',
      userImg: 'userImg-1',
      comments: [
        { title: 'comment-title-1-1', text: 'comment-text-1-1' },
        { title: 'comment-title-1-2', text: 'comment-text-1-2' },
        { title: 'comment-title-1-3', text: 'comment-text-1-3' },
      ],
    },
    {
      title: 'title-2',
      text: 'post text-2',
      userImg: 'userImg-2',
      comments: [
        { title: 'comment-title-2-1', text: 'comment-text-2-1' },
        { title: 'comment-title-2-2', text: 'comment-text-2-2' },
        { title: 'comment-title-2-3', text: 'comment-text-2-3' },
      ],
    },
    {
      title: 'title-3',
      text: 'post text-3',
      userImg: 'userImg-3',
      comments: [
        { title: 'comment-title-3-1', text: 'comment-text-3-1' },
        { title: 'comment-title-3-2', text: 'comment-text-3-2' },
        { title: 'comment-title-3-3', text: 'comment-text-3-3' },
      ],
    },
  ];

  return (
    <section>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </section>
  );
};

export default Main;
