import React from "react";
import { IoCheckmark } from "react-icons/io5";

function Skills({ title, data, checkedResponse, setCheckedResponse }) {

  const addToCheckedArray=(array, title)=> {
    return [...array, title];
  }
  const  deleteFromCheckedArray=(array, title)=> {
    return array.filter((item) => item !== title);
  }

  const handleClick = (title) => {
    let updateCheckedArray;
    if (checkedResponse.includes(title)) {
      updateCheckedArray = deleteFromCheckedArray(checkedResponse, title);
    } else {
      updateCheckedArray = addToCheckedArray(checkedResponse, title);
    }
    setCheckedResponse(updateCheckedArray);
  };


  return (
    <div className="pl-[11px] pt-[10px] pb-[8px] flex-1">
      <h3 className="text-[#6B6B7B] pb-[4px] text-[10px] leading-[12px]">
        {title}
      </h3>
      <div className="flex flex-col gap-[6px]">
        {data.map((skill) => (
          <div className="flex flex-col gap-10 " key={skill.id}>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => handleClick(skill.text)}
            >
              <div
                className={`border-[2px]  w-[22px] h-[22px] rounded-[4px] flex justify-center items-center gap-2  ${
                  checkedResponse.includes(skill.text)
                    ? "border-[#6764F1]"
                    : "border-[#F5F5F514]"
                } `}
              >
                {checkedResponse.includes(skill.text) && (
                  <IoCheckmark className="text-[#6764F1] text-[14px] font-semibold" />
                )}
              </div>
              <p className="text-[#F5F5F5] text-[10px] pt-[5px]">
                {skill.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
