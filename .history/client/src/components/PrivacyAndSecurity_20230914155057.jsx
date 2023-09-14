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
    </div>
  );
}
export default ProfilePrivacy;
