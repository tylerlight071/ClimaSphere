import React from "react";
import SlideInLeft from "./SlideInLeft";


interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <div className="mt-4">
      <SlideInLeft>
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg"
      >
        Check The Weather! ☁️
      </button>
      </SlideInLeft>
    </div>
  );
};

export default SubmitButton;
