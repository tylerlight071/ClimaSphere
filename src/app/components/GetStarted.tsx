import Link from "next/link";
import SlideInLeft from "./SlideInLeft";


export default function GetStartedButton() {
  return (
    <div>
      <SlideInLeft>
        <Link href="/dashboard">
          <button className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-bold py-2 px-5 rounded-full shadow-md transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg flex items-center space-x-2">
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </Link>
      </SlideInLeft>
    </div>
  );
}
