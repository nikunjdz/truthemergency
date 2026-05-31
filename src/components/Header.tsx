const Header = () => {
  return (
    <header className="w-full">
      <img
        src={`${import.meta.env.BASE_URL}images/header-banner.jpg`}
        alt="Truth Emergency - Publicizing Truths with Consequence"
        className="w-full max-h-[200px] object-cover"
        width={1920}
        height={512}
      />
    </header>
  );
};

export default Header;
