function Input({text,placeholder,style,callback}) {
  return (
    <label  htmlFor={{text}}>
      <input
        type="text"
        name={text}
        autoComplete="false"
        placeholder={placeholder}
        onChange={callback}
        className={style}
      />
    </label>
  );
}

export default Input;
