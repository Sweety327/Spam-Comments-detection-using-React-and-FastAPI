import { useState } from "react";
import API from "./api";
import "./App.css";

function App() {
  const [comment, setComment] = useState("");
  const [result, setResult] = useState("");

  const predictComment = async () => {
    if (!comment.trim()) {
      alert("Please enter a comment.");
      return;
    }

    try {
      const response = await API.post("/predict", {
        comment: comment,
      });

      setResult(response.data.prediction);
    } catch (error) {
      console.error(error);
      setResult("Connection Error");
    }
  };

  return (
    <div className="container">
      <h1>YouTube Spam Comment Detector</h1>

      <textarea
        rows="8"
        placeholder="Enter your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button onClick={predictComment}>
        Predict
      </button>

      {result && (
        <div className="result">
          <h2>Prediction</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;