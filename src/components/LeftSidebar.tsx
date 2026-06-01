const LeftSidebar = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <aside className="w-full flex flex-col items-center bg-[#fafafa] p-2">
      <h3 className="text-[11px] font-bold text-[#2c527a] mb-3 uppercase border-b border-gray-200 w-full text-center pb-1">
        Recommended References
      </h3>
      <div className="flex flex-col gap-5 items-center">
        <a href="#resources?tab=books" className="block">
          <img
            src={`${baseUrl}images/truth_books.png`}
            alt="Books"
            className="w-36 h-auto shadow-sm hover:shadow-md transition-shadow"
          />
        </a>
        <a href="#resources?tab=films" className="block">
          <img
            src={`${baseUrl}images/truth_films.png`}
            alt="Films"
            className="w-36 h-auto shadow-sm hover:shadow-md transition-shadow"
          />
        </a>
        <a href="#resources?tab=online" className="block">
          <img
            src={`${baseUrl}images/truth_online.png`}
            alt="Online"
            className="w-36 h-auto shadow-sm hover:shadow-md transition-shadow"
          />
        </a>
      </div>
    </aside>
  );
};

export default LeftSidebar;
