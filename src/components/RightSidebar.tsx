const summitLinks = [
  "Vital Background",
  "Is this gathering for you?",
  "Participants",
  "Why now?",
  "Schedule/Structure Outline",
  "Program Components",
  "Maps & Logistics",
  "Link Banners",
  "Media Policy",
  "The Satya Sam Award",
  "The Plot to Seize the White House",
  "Treachery Without Consequence",
  "Critical Mass & Red Pill Politics",
];

const articleLinks = [
  "9/11 AND THE MAINSTREAM PRESS",
  "American Tears",
  "Anti-Iranian Agitprop",
  "Cheney's Law",
  "Citizen Primer on Corporate Criminality",
  "Coup Spoils: Big Pharma grabs med ed",
  "Gary Hart gently warns of staged war provocations",
];

const SidebarSection = ({ title, links }: { title: string; links: string[] }) => (
  <div className="mb-8">
    <h3 className="bg-[#7a9ab5] text-white px-3 py-1.5 font-bold text-center text-[13px] rounded-sm uppercase tracking-wide">
      {title}
    </h3>
    <ul className="mt-3 space-y-1.5 px-1">
      {links.map((link, i) => (
        <li key={i}>
          <a href="#" className="text-[#2c527a] hover:underline text-[12px] leading-tight block">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const RightSidebar = () => {
  return (
    <aside className="w-full flex flex-col items-center">
      {/* Search Bar at the very top */}
      <div className="mb-8 w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-200 px-3 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-blue-200"
        />
      </div>

      {/* 
         Recommended References Section 
         As seen in Screenshot 12.41.39 PM 
      */}
      <div className="mb-10 w-full flex flex-col items-center gap-4">
        <h3 className="text-sm font-bold text-[#2c527a] mb-2 uppercase border-b border-gray-100 w-full text-center pb-1">
          Recommended References
        </h3>
        <div className="flex flex-col gap-5">
          <a href="#resources?tab=books" className="block">
            <img
              src={`${import.meta.env.BASE_URL}images/truth_books.png`}
              alt="US Truth Emergency References - BOOKS"
              className="w-36 h-auto shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            />
          </a>
          <a href="#resources?tab=films" className="block">
            <img
              src={`${import.meta.env.BASE_URL}images/truth_films.png`}
              alt="US Truth Emergency References - FILMS"
              className="w-36 h-auto shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            />
          </a>
          <a href="#resources?tab=online" className="block">
            <img
              src={`${import.meta.env.BASE_URL}images/truth_online.png`}
              alt="US Truth Emergency References - ONLINE"
              className="w-36 h-auto shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            />
          </a>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="w-full">
        <SidebarSection title="Summit Details" links={summitLinks} />
        <SidebarSection title="Articles" links={articleLinks} />
      </div>
    </aside>
  );
};

export default RightSidebar;