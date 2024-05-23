import use from '../hooks/use';
import { fetchData } from '../utils/data';

export default function Comments({ postId }) {
  const comments = use(
    fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
  );
  return (
    <div>
      <h2 className="text-2xl my-2">Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li className="text-xl" key={comment.id}>
            {comment.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
