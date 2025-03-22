import { useState } from "react";

const tabsData = [
  {
    label: "Tab 1",
    content:
      "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
  },
  {
    label: "Tab 2",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
];

const ResultPage = ({ closeResult }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="flex justify-between ">
        <h1 className="mb-4 text-3xl text-gray-900 dark:text-white ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Results
          </span>
        </h1>
        <button
          type="button"
          onClick={closeResult}
          className="float-right text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Go back
        </button>
      </div>
      <hr />
      <div className="flex flex-wrap gap-2 shadow-md p-4 ">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b-4 transition-colors duration-300  ${
                idx === activeTabIndex
                  ? "border-teal-500"
                  : "border-transparent hover:border-gray-200"
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="py-4">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
};
export default ResultPage;
