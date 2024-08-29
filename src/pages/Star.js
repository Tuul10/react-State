import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const stars = [1];

const Star = () => {
  const [rating, setRating] = useState(0);

  const handleSelectColor = (newRating) => {};

  return (
    <div className="mx-auto w-[500px] flex flex-col gap-4 h-[500px] text-center justify-center items-center">
      <div className="font-semibold text-xl">How was your stay?</div>
      <div className="flex">{}</div>
    </div>
  );
};
export default Star;

{
  /* <div className=" flex flex-col mr-4 justify-center items-center">
          <FaStar color="#eba833" />
          <p>terrible</p>
        </div>

        <div className=" flex flex-col mr-4 justify-center items-center">
          <FaStar color="#eba833" />
          <p>terrible</p>
        </div>
        <div className=" flex flex-col mr-4 justify-center items-center">
          <FaStar color="#eba833" />
          <p>terrible</p>
        </div>
        <div className=" flex flex-col mr-4 justify-center items-center">
          <FaStar color="#eba833" />
          <p>terrible</p>
        </div>
        <div className=" flex flex-col mr-4 justify-center items-center">
          <FaStar color="gray" />
          <p>great</p>
        </div> */
}
