import SlideInLeft from "./SlideInLeft";

interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ onChange }) => {
  return (
    <div>
      <SlideInLeft>
        <input
          type="text"
          placeholder="🔍 Search For Location Here!"
          className="input input-bordered input-accent w-96 h-14 text-lg rounded-lg shadow-lg bg-black transition duration-500 ease-in-out transform focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
          onChange={onChange}
        />
      </SlideInLeft>
    </div>
  );
};

export default Search;
