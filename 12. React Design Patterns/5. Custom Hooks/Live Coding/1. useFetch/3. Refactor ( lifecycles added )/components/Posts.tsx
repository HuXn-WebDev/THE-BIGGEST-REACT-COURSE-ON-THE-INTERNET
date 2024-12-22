import useFetch from "../hooks/useFetch";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [data, loading, error] = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching posts: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data &&
          data.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Posts;
