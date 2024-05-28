"use server";

const BASE_URL = "http://localhost:3004";

export const getTime = async () => {
  const { time } = await fetch(`${BASE_URL}/time`).then((res) => res.json());

  return time;
};
