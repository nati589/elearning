import React from "react";

function ProgressCard(props) {
  const { courseName, final, mid, quiz, assignment } = props;

  // Convert values to numbers and calculate the total score
  const quizSum = quiz.map(Number).reduce((a, b) => a + b, 0);
  const assignSum = assignment.map(Number).reduce((a, b) => a + b, 0);
  const total = quizSum + Number(mid) + Number(final) + assignSum;

  return (
    <div className="bg-white rounded-lg p-4 max-w-xl shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-purple-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold text-lg">
            CN
          </div>
          <h2 className="text-xl font-bold ml-2">{courseName}</h2>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <span className="font-bold text-gray-700 mr-2">Progress:</span>
          <div className="bg-gray-200 h-2 flex-grow rounded-full">
            <div
              className="bg-medium-purple h-2 rounded-full"
              style={{ width: `${props.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <h3 className="font-bold text-gray-700">Assessments</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th colSpan="2">Quizzes</th>
              </tr>
              <tr>
                <th>Type</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {quiz.map((quizValue, index) => (
                <tr key={index}>
                  <td>Quiz {index + 1}</td>
                  <td className="text-center">{quizValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th colSpan="2">Assignments</th>
              </tr>
              <tr>
                <th>Type</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {assignment.map((assignValue, index) => (
                <tr key={index}>
                  <td>Assignment {index + 1}</td>
                  <td className="text-center">{assignValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-gray-700">Results</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="mt-4 text-center">Mid Result: {total}</p>
            {/* <ul>
              {quiz.length > 0 && (
                <li>
                  Mid:
                  {quiz.map((quizValue, index) => (
                    <span key={index}>
                      {index + 1}: {quizValue}
                      {index < quiz.length - 1 && ", "}
                    </span>
                  ))}
                </li>
              )}
            </ul> */}
          </div>
          <div>
            <p className="font-bold">Final Results:</p>
            <ul>
              {assignment.map((assignValue, index) => (
                <li key={index}>
                  Final {index + 1}: {assignValue}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-center">Total Score: {total}</p>
      </div>
    </div>
  );
}

export default ProgressCard;
