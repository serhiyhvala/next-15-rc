"use client";

import { FC, useActionState } from "react";

async function increment(previousState: number) {
  return previousState + 1;
}

export const StatefulForm: FC = () => {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
};
