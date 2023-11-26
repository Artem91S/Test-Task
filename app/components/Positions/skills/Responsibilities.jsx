"use client";
import { useState } from "react";
import Skills from "../../ui/components/Skills/Skills";
import {
  tradeData,
  showdownsData,
  productionData,
  administrationData,
} from "./mockData/mockData";
const block = [
  {
    id: 1,
    title: "Торговля",
    data: tradeData,
    title2: "Разборки",
    data2: showdownsData,
  },

  {
    id: 3,
    title: "Производство",
    data: productionData,
    title2: "Управление",
    data2: administrationData,
  },
];
function Responsibilities() {
  const checkedValues = [
    "Выставлять цены",
    "Дуель",
    "Закупать сырье",
    "Выгонять из банды",
  ];
  const [checkedResponse, setCheckedResponse] = useState(checkedValues);
  return (
    <div className="flex flex-col gap-2 relative  ">
      <div>
        <div className="bg-[#292930] rounded-t-[8px] shadow-[0px_6px_16px_6px_#0000003D] px-4 pt-[14px] pb-[8px] absolute w-full ">
          <p className="text-[12px] text-[#6B6B7B] ">Обязаности</p>
        </div>

        <div className="bg-[#292930] flex gap-[90px] ml-[4px] pt-[4px] h-[388px] rounded-b-[8px] mt-[40px] overflow-y-scroll">
          {block.map((skill) => (
            <div key={skill.id} className="h-[100vh] overflow-hidden">
              <Skills
                title={skill.title}
                data={skill.data}
                setCheckedResponse={setCheckedResponse}
                checkedResponse={checkedResponse}
              />
              <Skills
                title={skill.title2}
                data={skill.data2}
                setCheckedResponse={setCheckedResponse}
                checkedResponse={checkedResponse}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Responsibilities;
