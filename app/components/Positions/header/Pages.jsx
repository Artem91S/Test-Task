const listOfTitles = [
  {
    id: 1,
    title: "Иерархия",
  },
  {
    id: 2,
    title: "Должности",
  },
  {
    id: 3,
    title: "Список персонала",
  },
  {
    id: 4,
    title: "Наборы экипировк",
  },
];

function Pages({ setShowContent, showContent }) {
  return (
    <ul className="flex">
      {listOfTitles.map((link) => (
        <li
          key={link.id}
          id={link.id}
          onClick={() => {
            setShowContent(link.title);
          }}
          className={`
          text-[#9C9CB0]  box-border cursor-pointer w-full h-[44px] border-[2px] border-[#3A3A41] rounded-t-[8px] flex justify-center items-center text-[11px] leading-6 box-shadow: 0px 4px 8px 0px #6764F129 inset;
          ${link.id !== "1" && "border-l-0"} ${
            link.id == "1" && "border-l-[2px]"
          } ${
            showContent == link.title &&
            "shadow-[-2px_-3px_5px_0px_#6764F129] border-b-0"
          }`}
        >
          {link.title}
        </li>
      ))}
    </ul>
  );
}

export default Pages;
