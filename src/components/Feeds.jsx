import { useState } from "react";
import "./Feeds.scss";

function Feeds({ url }) {
  const [comments, setComments] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const inputHandler = (event) => {
    setComments(event.target.value);
  };

  const submitHandler = () => {
    let dateId = Date.now();
    setCommentsList((prev) => [...prev, { id: dateId, text: comments }]);
    setComments("");
  };

  const deleteHandler = (commentId) => {
    const list = commentsList.filter((item) => item.id !== commentId);
    setCommentsList(list);
  };

  return (
    <div>
      <img src={url} alt="NANA" />
      <div>
        {commentsList.map((comment) => {
          return (
            <div className="commentList">
              <span key={comment.id}>{comment.text}</span>
              <button onClick={() => deleteHandler(comment.id)}>✖️</button>
            </div>
          );
        })}
      </div>
      <div className="comments">
        <input
          value={comments}
          onChange={inputHandler}
          type="text"
          placeholder="귀여운 나나에게 한 마디 !"
        ></input>
        <button onClick={submitHandler}>Enter</button>
      </div>
    </div>
  );
}

export default Feeds;
