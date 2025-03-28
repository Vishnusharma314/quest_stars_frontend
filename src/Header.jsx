import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/signin", { replace: true });
  };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <h1 className="text-3xl text-gray-900 dark:text-white ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  Project Name
                </span>
              </h1>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                onClick={logout}
                className=" bg-white rounded-sm p-1 pl-3 pr-3 hover:cursor-pointer hover:opacity-50 "
              >
                Sign out
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
