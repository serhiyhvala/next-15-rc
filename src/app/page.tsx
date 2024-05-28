import { getTime } from "@/actions";
import { unstable_after as after } from "next/server";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const time = await getTime();

  after(() => {
    console.log("after");
  });

  return (
    <main>
      <div>{time}</div>
    </main>
  );
}
