import React, { useState } from "react";

const ProfilePictureChanger = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-off-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Change Profile Picture</h2>
      <div className="mb-4">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected Profile"
            className="w-32 h-32 rounded-full mx-auto"
          />
        ) : (
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto" />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      {selectedImage && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setSelectedImage(null)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default ProfilePictureChanger;
