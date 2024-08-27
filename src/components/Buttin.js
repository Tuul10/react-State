export const Button = (props) => {
  const { text } = props;
  return (
    <div className="py-1 px-2 bg-blue-500 rounded-md">
      <button>{text}</button>
    </div>
  );
};
