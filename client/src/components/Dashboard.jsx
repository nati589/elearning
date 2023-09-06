import ProgressPage from "../pages/TestPage";

function Dashboard() {
  return (
    <div className="   flex flex-col  items-center gap-3  h-full overflow-y-scroll  mx-auto my-auto py-5">
      <ProgressPage />
      <ProgressPage />
      <ProgressPage />
    </div>
  );
}

export default Dashboard;
