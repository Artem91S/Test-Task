"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../../ui/components/Button/Button";
import CreatePlayer from "./CreatePlayer";
import Group from "../../../../assets/images/Group.svg";
const task = [
  {
    id: 1,
    person: "Новобранец",
    task: "от 10 lvl",
    price: 50,
    order: 1,
  },
  {
    id: 2,
    person: "Рядовой",
    task: "5 заданий",
    price: 80,
    order: 2,
  },
  {
    id: 3,
    person: "Сержант",
    task: "10 заданий",
    price: 100,
    order: 3,
  },
  {
    id: 4,
    person: "Новобранец",
    task: "10 заданий",
    price: 50,
    order: 4,
  },
  {
    id: 5,
    person: "Рядовой",
    task: "15 заданий",
    price: 80,
    order: 5,
  },
  {
    id: 6,
    person: "Сержант",
    task: "20 заданий",
    price: 100,
    order: 6,
  },
  {
    id: 7,
    person: "Новобранец",
    task: "25 заданий",
    price: 50,
    order: 7,
  },
];

function TaskList() {
  const [dataFields, setDataFields] = useState(task);
  const [createPlayer, setCreatePlayer] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);


  const dragStartHandler = (e, card) => {
    setCurrentPlayer(card);
    e.target.style.border = "2px solid #6764F1";
  };
  const dragLeaveHandler = (e) => {};
  const dragEndHandler = (e) => {};
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.border = "none";
  };

  const dropHandler = (e, card) => {
    e.preventDefault();

    setDataFields(
      task.map((item) => {
        if (item.id === card.id) {
          return { ...item, order: currentPlayer.order };
        }
        if (item.id === currentPlayer.id) {
          return { ...item, order: card.order };
        }
        return item;
      })
    );

  };

  const sortPlayers = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  return (
    <div className="flex flex-col gap-[10px]  ">
      <div className="flex flex-col gap-[10px] h-[563px] overflow-y-scroll">
        {createPlayer && (
          <CreatePlayer
            setCreatePlayer={setCreatePlayer}
            setDataFields={setDataFields}
            dataFields={dataFields}
          />
        )}
        {dataFields.sort(sortPlayers).map((player) => (
          <div
            key={player.id}
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, player)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, player)}
            className=" flex  rounded-[8px] justify-between  bg-[#303038] px-[16px]  pt-[20px] pb-[18px]  "
          >
            <div className="flex justify-center items-center gap-[14px]  ">
              <Image src={Group} alt="logo" width={12} height={20} />

              <div>
                <p className="text-[12px] font-semibold text-white">
                  {player.person}
                </p>
                <p className="text-[#6B6B7B] text-[10px] font-semibold">
                  {player.task}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start ">
              <span className="text-[#EFB62B] text-[11px] ">
                ${player.price}
              </span>
              <span className="text-[#6B6B7B] text-[10px]   ">/час</span>
            </div>
          </div>
        ))}
      </div>
      <Button
        title={"Создать новую должность"}
        callback={() => setCreatePlayer(true)}
      />
    </div>
  );
}

export default TaskList;
