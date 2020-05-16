
function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto">
        <img src="/profile-pic.jpg" className="h-24 rounded-full mx-auto mb-5" />
        <h1 className="font-bold">Pieter Montoulieu</h1>
        <p>Full Stack Engineer, Game Developer and Audio Engineer</p>
      </div>
    </header>
  );
}

export default Header;
