function Button({ title,callback }) {
  return (
    <>
    <button 
    onClick={callback}
    className="text-center shadow-[0px_4px_40px_0px_#6866EA3D] bg-[#6764F1] py-[10px] ml-[4px]  border-[2px] rounded-[8px] border-[#7e7bf2] text-white font-semibold text-[11px]"
      type="button"
    >
      {title}
    </button>
    </>
  );
}

export default Button;
