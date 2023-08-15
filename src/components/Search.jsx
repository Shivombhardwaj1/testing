import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


const Search = () => {


  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select
          className="p-2 bg-gray-300 text-black border text-xs xl:text-sm w-[55px]" 
        >
          <option>All</option>
          <option>Alexa</option>
          <option>Books</option>
          <option>Baeuty</option>
          <option>Bike</option>
          <option>TV</option>
          <option>Computer</option>
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l text-black"type="text" placeholder="Search Amazon.in"/>
        <button  className="w-[45px]">
          <MagnifyingGlassIcon className="h-[25px] m-auto stroke-slate-900" />
        </button>
      </div>
   
    </div>
  );
};

export default Search;











