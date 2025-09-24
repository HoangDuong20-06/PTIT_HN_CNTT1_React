import React from "react";

const UpdateButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      ✏️
    </button>
  );
};

export default UpdateButton;
