import { FC } from "react";
import { BadHydration } from "@/components";

const HydrationErrorPage: FC = () => {
  return (
    <div>
      <h1>Hydration Error</h1>
      <BadHydration />
    </div>
  );
};

export default HydrationErrorPage;
