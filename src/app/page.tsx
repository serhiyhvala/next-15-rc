import { getTime } from "@/actions";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const time = await getTime();

  return (
    <main>
      <div>{time}</div>
    </main>
  );
}
