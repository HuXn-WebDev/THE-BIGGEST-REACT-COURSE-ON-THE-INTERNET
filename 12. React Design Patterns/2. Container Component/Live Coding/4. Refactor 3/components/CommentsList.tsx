interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsListProps {
  comments: Comment | null;
}

const CommentsList = ({ comments }: CommentsListProps) => {
  const { id, name, email, body } = comments || {};

  return comments ? (
    <div>
      <p>
        <strong>Comment ID:</strong> {id}
      </p>
      <h1>
        <strong>Comment Name:</strong> {name}
      </h1>
      <p>
        <strong>Comment Email:</strong> {email}
      </p>
      <p>
        <strong>Comment Body:</strong> {body}
      </p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CommentsList;
