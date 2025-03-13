import Link from "next/link";
import { Post } from "../../../types/post";

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

export default function Posts() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
