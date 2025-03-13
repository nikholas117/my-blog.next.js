import { Post } from "../../../../types/post";

const posts: Post[] = [
  {
    id: 1,
    title: "First Post",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is my second post",
    date: "2023-02-01",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is my third post",
    date: "2023-03-01",
  },
  {
    id: 4,
    title: "Fourth Post",
    content: "This is my Fourth post",
    date: "2023-04-01",
  },
];

interface PostPageProps {
  params: { id: string };
}

export default function PostPage({ params }: PostPageProps) {
  const { id } = params;

  // Find the post by the id
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.date}</p>
    </div>
  );
}
