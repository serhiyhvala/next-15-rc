"use client";

import { FC, useEffect, useState } from "react";

export const BadHydration: FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{JSON.stringify(time)}</p>;
};
