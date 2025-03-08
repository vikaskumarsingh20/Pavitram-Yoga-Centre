import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

function Help() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    // In a real application, this would connect to a backend API
    console.log("Sending question to: vikaskumarsingh0931@gmail.com");
    console.log("Question:", question);

    // Show success notification
    toast.success("Question Submitted!", { duration: 2000 });

    // Reset the form
    setQuestion("");
  };

  return (
    <div className="container-fluid">
      <h2 className="account-title">Help Section</h2>

      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light py-2 px-3 rounded-3">
          <li className="breadcrumb-item">
            <i className="bi bi-house-door-fill me-2"></i>
            <Link to="/user">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Help
          </li>
        </ol>
      </nav>
      <div className="card shadow-lg">
        <div className="card-header bg-primary1 text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <i className="bi bi-question-circle-fill me-2"></i> Help
          </h5>
        </div>

        <div className="card-body">
          <h5 className="card-title">Your Question</h5>


          <textarea
            className="form-control"
            placeholder="Enter your question here"
            rows="3"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
        </div>
        <form onSubmit={handleSubmit} className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary bg-primary1 mt-3 mb-2 text-center"
            disabled={!question.trim()}
          >
            Send <i className="bi bi-send-check me-2"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Help;
