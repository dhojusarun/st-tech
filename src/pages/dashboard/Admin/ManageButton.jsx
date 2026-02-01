import React from "react";
import { useNavigate } from "react-router-dom";

function ManageButton({ course }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate("managecourse", {
  state: { course },
})
      }
      className="bg-[#E0A239] text-white px-4 py-1 rounded-full text-sm"
    >
      Manage
    </button>
  );
}

export default ManageButton;