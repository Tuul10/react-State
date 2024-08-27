export const Number = (props) => {
  const { number } = props;
  return (
    <div
      className={`w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-400 `}
    >
      <p>{number}</p>
    </div>
  );
};
