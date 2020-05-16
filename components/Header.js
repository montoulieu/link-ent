
function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto">
        <img src="https://placekitten.com/200/200" className="h-24 rounded-full mx-auto mb-5" />
        <h1 className="font-bold">Your Name</h1>
        <p>Your Title</p>
      </div>
    </header>
  );
}

export default Header;
