import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();
  return (
    <div className="start-page">
      <h2>Quizzical </h2>
      <p>Test your knowledge!</p>
      <button
        className="start-button"
        onClick={() => {
          navigate("/questions");
        }}
      >
        Start quiz!
      </button>
    </div>
  );
};

export default StartPage;
