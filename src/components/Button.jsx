function Button({ text, cn, icon, position, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${cn} flex items-center gap-2 bg-[#4FBDD2] text-white rounded-3xl px-6 py-2 hover:[#31A9C0]`}
    >
      <span>{position === 'left' && icon}</span>
      {text}
      <span>{position === 'right' && icon}</span>
    </button>
  );
}

export default Button;
