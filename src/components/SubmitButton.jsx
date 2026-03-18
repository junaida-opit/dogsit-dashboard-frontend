import React from "react";

const SubmitButton = ({ isSubmitting, isSubmittingText, defaultText }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-teal-700 text-white p-2 rounded"
    >
      {isSubmitting ? isSubmittingText : defaultText}
    </button>
  );
};

export default SubmitButton;
