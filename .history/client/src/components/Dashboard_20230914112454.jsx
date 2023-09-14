import ProgressCard from "./ProgressCard";

function Dashboard() {
  const assignArray = [5, 4, 10, 8];
  const quizArray = [5, 4, 10, 8];

  return (
    <div className="h-full w-full overflow-y-auto flex flex-col flex-wrap  items-center gap-3 mx-auto pt-5 pb-96">
      <ProgressCard
        assignment={assignArray}
        quiz={quizArray}
        mid="20"
        final="45"
        totalCourseContents="30"
      />
      <ProgressCard
        assignment={assignArray}
        quiz={quizArray}
        mid="20"
        final="45"
        totalCourseContents="30"
      />
    </div>
  );
}

export default Dashboard;
