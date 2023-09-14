import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

function ProfilePrivacy() {
  const [newEmail, setNewEmail] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeEmail = () => {
    if (newEmail === confirmation) {
      // Send a request to change the email on the server here
      // You can use Axios or any other HTTP library for this
      // After successful change, update the message state
      setMessage("Email changed successfully.");
    } else {
      setMessage("Emails do not match. Please confirm your new email.");
    }
  };

  return (
    <div className="bg-off-white">
      <div class="grid grid-cols-2">
        <div class="px-4 py-2 font-semibold">Email.</div>
      </div>
      <div className="w-1/2 mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Change Email</h2>
        <div className="mb-4">
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="New Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Confirm New Email"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleChangeEmail}
        >
          Change Email
        </button>
        {message && <div className="text-red-500 mt-2">{message}</div>}
      </div>
    </div>
  );
}
export default ProfilePrivacy;
