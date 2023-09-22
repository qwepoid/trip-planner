const Header = () => {
  return (
    <div className="flex w-full p-4 justify-between border-b-2 border-b-stone-100 items-center">
      <div className="flex gap-20">
        <div>Home</div>
        <div>Destination</div>
        <div>Tour</div>
        <div>Pages</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
      <div className="flex gap-8">
        <div className="bg-yellow-500 p-1 px-8 rounded-sm">Login</div>
        <div className="border border-yellow-500 p-1 px-2 rounded-sm">
          Book a tour
        </div>
      </div>
    </div>
  );
};

export default Header;
