import { useState } from "react";

const players = [
  {
    id: 1,
    playerName: "John Cena",
    playerScore: 8,
  },
  {
    id: 2,
    playerName: "John John",
    playerScore: 10,
  },
  {
    id: 3,
    playerName: "John Kena",
    playerScore: 5,
  },
];

export const PlayScore = () => {
  const [score, setScore] = useState(players);

  const incrementScore = (index) => {
    const updatedScore = [...score];
    updatedScore[index].playerScore += 1;
    setScore(updatedScore);
  };

  const decrementScore = (index) => {
    const updatedScore = [...score];
    updatedScore[index].playerScore -= 1;
    setScore(updatedScore);
  };

  const resendScore = () => {
    const resetPlayerData = players.map((player) => {
      return {
        ...player,
        playerScore: 0,
      };
    });
    setScore(resetPlayerData);
  };

  return (
    <div className="w-[530px] flex flex-col items-center justify-center rounded-[24px] p-32px mx-auto mb-2">
      <div className="flex justify-between w-[530px] ">
        <h1 className="text-[#000000] text-2xl">Play Score</h1>
        <img src="win.png" />
      </div>
      <p className="text-base w-[530px]">Hidden in the middle of text</p>
      <div className="mt-[24px]">
        {score.map((item, index) => {
          return (
            <div key={item.id} className="flex py-4 w-[530px] justify-between">
              <p>{item.playerName} </p>
              <div className="flex bg-[#F2F2F2] w-[128px] h-[40px] rounded-[48px] items-center justify-between ">
                <div
                  onClick={() => decrementScore(index)}
                  className="w-10 h-10 rounded-full bg-[#FFFFFF] p-[10px] flex justify-center items-center border"
                >
                  -
                </div>
                <div>{item.playerScore}</div>
                <div
                  onClick={() => incrementScore(index)}
                  className="w-10 h-10 rounded-full bg-[#FFFFFF] p-[10px] flex justify-center items-center border"
                >
                  +
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        onClick={resendScore}
        className="bg-[#14B166] rounded-xl w-[120px] text-center p-4 ml-auto mt-20"
      >
        Reset
      </div>
    </div>
  );
};
