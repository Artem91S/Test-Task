"use client";
import Image from "next/image";
import {useState } from "react";
import Input from '../../ui/components/Input/Input'
import { IoPersonAddSharp } from "react-icons/io5";
import Group from '../../../../assets/images/Group.svg'

const players=[
  {
    id:1,
    text:'Игрок'
  },
  {
    id:2,
    text:'Новобранец'
  },
  {
    id:3,
    text:'Рядовой'
  },
  {
    id:4,
    text:'Сержант'
  },
]

function CreatePlayer({ setCreatePlayer, dataFields, setDataFields }) {
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const handleChange = (e) => {
    setCurrentPlayer({
      ...currentPlayer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setCurrentPlayer({
      ...currentPlayer,
      id: Date.now(),
      order: Date.now(),
    });
    if (currentPlayer?.price && currentPlayer?.person && currentPlayer?.task && currentPlayer?.person !== "Игрок") {
      setDataFields([currentPlayer, ...dataFields]);
      setCreatePlayer(false);
    } 
    else {
    }
  };
  return (
    <div className="flex flex-col gap-[10px] ">
      <div className=" flex  rounded-[8px] justify-between  bg-[#303038] px-[15px]  pt-[19px] pb-[18px] ">
        <div className="flex justify-center items-center gap-[14px] ">
          <Image src={Group} alt="logo" width={12} height={20} />

          <div className="flex flex-col gap-4">
            <select  name="person" id="person" onChange={handleChange} className="bg-transparent  border-[1px] text-white text-[14px]">
            { players.map((player)=>(
              <option
              key={player.id}
              value={player.text}>{player.text}</option>
            ))}
            </select>
            <Input 
            text={'task'} 
            placeholder={'Add task'} 
            callback={handleChange}
            style="text-[12px] font-semibold bg-transparent border-b-[1px] border-[#6B6B7B] focus:outline-none text-[#6B6B7B]"
            />
             <Input 
            text={'price'} 
            placeholder={'Add price'} 
            callback={handleChange}
            style="text-[12px] font-semibold bg-transparent border-b-[1px] border-[#6B6B7B] focus:outline-none text-[#6B6B7B]"
            />
          </div>
        </div>
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={handleSubmit}
        >
          <IoPersonAddSharp className="text-[34px] text-white" />
        </div>
      </div>
    </div>
  );
}

export default CreatePlayer;
