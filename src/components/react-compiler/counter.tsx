"use client";

import { FC, useState } from "react";
import { Heading } from "@/components/react-compiler/heading";

export const Counter: FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <Heading />
      <div className="flex flex-col items-center justify-center">
        <h1>Counter</h1>
        <p>{counter}</p>
        <div className="flex gap-4">
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
          <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  );
};
