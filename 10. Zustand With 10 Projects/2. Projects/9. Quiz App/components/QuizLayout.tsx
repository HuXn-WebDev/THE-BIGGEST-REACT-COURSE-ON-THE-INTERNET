import Sidebar from "./Sidebar";
import Question from "./Question";

const QuizLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Question />
      </div>
    </div>
  );
};

export default QuizLayout;
