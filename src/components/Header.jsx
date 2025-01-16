import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-gray-900 py-6 px-4 shadow-md">
      <div className="container flex flex-col md:flex-row justify-between items-center mx-auto ">
        <h1 className="text-white text-2xl font-bold mb-4 md:mb-0">
          Praiyz-Movie-App
        </h1>
        <div className="w-full md:w-1/2">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
