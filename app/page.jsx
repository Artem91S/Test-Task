"use client";
import Responsibilities from "./components/Positions/skills/Responsibilities";
import Pages from "./components/Positions/header/Pages";
import Button from "./components/ui/components/Button/Button";
import NameOfPlayer from "./components/Positions/names/NameOfPlayer";
import TaskList from "./components/Positions/taskList/TaskList";
import { useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState('Должности');

  return (
    <div className='bg-[url(../assets/images/main-bg.png)] w-[100%] h-[100vh] bg-cover relative'>
      <div className="bg-[#262534B8]/70 absolute w-[100%] h-[100vh] z-10"/>
      <div className="bg-[#292930]  border-[2px] border-[#3A3A41] w-[936px] h-[760px] rounded-[8px]  absolute top-[13%] left-[25%] pt-[18px] pb-5 px-[18px] z-10 ">
        <div>
          <Pages setShowContent={setShowContent} showContent={showContent} />
          <div className="grid grid-cols-3 max-h-[674px] h-full border-[2px] gap-[10px] border-[#3A3A41] border-t-0 rounded-b-[8px] pb-[32px] px-[32px] pt-[21px]">
            {showContent == "Должности" && 
              <>
                <TaskList/>
                <div className=" col-span-2 bg-[#303038] flex flex-col rounded-[8px] p-4 gap-[11px] ml-[5px]">
                  <NameOfPlayer />
                  <Responsibilities />
                  <Button title="Сохранить" />
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
