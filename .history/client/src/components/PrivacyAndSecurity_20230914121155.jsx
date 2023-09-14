import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

function ProfilePrivacy() {
  return (
    <div className="bg-off-white">
      <div class="grid grid-cols-2">
        <div class="px-4 py-2 font-semibold">Email.</div>
        <div class="px-4 py-2">
          <a class="text-dark-purple" href="mailto:jane@example.com">
            beletu@example.com
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProfilePrivacy;
