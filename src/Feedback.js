// Feedback.js
import React, { useRef, useState } from "react";

function Feedback() {
  const nicknameRef = useRef();
  const ratingRef = useRef();
  const recommendRef = useRef();
  const commentsRef = useRef();

  const [summary, setSummary] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nickname: nicknameRef.current.value,
      rating: ratingRef.current.value,
      recommend: recommendRef.current.checked,
      comments: commentsRef.current.value,
    };

    if (!data.rating) {
      alert("Rating is required");
      return;
    }

    setSummary(data);
  };

  return (
    <div>
      <h2>Feedback (Uncontrolled Form)</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nickname" ref={nicknameRef} /><br /><br />

        <label>Rating (1–5):</label><br />
        <select ref={ratingRef}>
          <option value="">Select rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select><br /><br />

        <label>
          <input type="checkbox" ref={recommendRef} /> Would Recommend?
        </label><br /><br />

        <textarea placeholder="Comments" ref={commentsRef}></textarea><br /><br />

        <button type="submit">Submit</button>
      </form>

      {summary && (
        <div className="summary">
          <h3>Submitted Feedback</h3>
          <p><strong>Nickname:</strong> {summary.nickname}</p>
          <p><strong>Rating:</strong> {summary.rating}</p>
          <p><strong>Recommend:</strong> {summary.recommend ? "Yes" : "No"}</p>
          <p><strong>Comments:</strong> {summary.comments}</p>
        </div>
      )}
    </div>
  );
}

export default Feedback;
