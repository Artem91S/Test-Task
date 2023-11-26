import Input from '../../ui/components/Input/Input'
function NameOfPlayer() {
  return (
    <section className="flex flex-col bg-[#292930]  rounded-[8px] px-[18px] pt-[12px] pb-[21px] gap-[5px]">
      <h3
        htmlFor="name"
        className="text-[10px] font-semibold text-[#6B6B7B] "
      >
        Название
      </h3>
      <Input
      text={'name'}
      placeholder={'Новобранец'}
      style="focus:outline-none w-full bg-transparent text-white placeholder:text-white placeholder:text-[12px] border-[2px] rounded-[8px] border-[#393940] px-4 pt-[6px] pb-[10px]"
      />
    </section>
  );
}

export default NameOfPlayer;
