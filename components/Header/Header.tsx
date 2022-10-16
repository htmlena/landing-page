import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="bg-main-dark p-5">
      <div className="flex justify-end max-w-screen-xl my-0 mx-auto">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
