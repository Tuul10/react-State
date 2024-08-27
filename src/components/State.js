import { useState } from "react";

const userList = ["Tergel", "Tengis", "Dash", "Nym"];

export const State = () => {
  const [index, setindex] = useState(0);
  const [user, setUser] = useState(userList);

  return (
    <div className="text-center">
      <button onClick={() => setindex(index + 1)}>Nemeh</button>
      <div>
        <p>{index}</p>
      </div>
      <button onClick={() => setindex(index - 1)}>Hasah</button>

      {user.map((element) => {
        return <p>{element}</p>;
      })}
    </div>
  );
};
