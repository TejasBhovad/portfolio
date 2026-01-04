import { readFileSync } from "fs";

export default async function HomePage() {
  const data = await getData();

  return (
    <div className="w-full flex-1 bg-background border-2 border-muted">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <section className="w-full flex flex-col sm:flex-row sm:h-56 bg-red-300/0 border-b-2 border-muted">
        <div className="sm:h-full w-full sm:w-auto aspect-square border-r-2 border-muted"></div>
        {/* div that takes rest of space felx 1 or smth */}
        <div className="flex-1 flex flex-col bg-red-400 justify-start w-full h-full items-start">
          <span className="bg-green-500 text-3xl font-semibold">
            I'm Tejas Bhovad
          </span>
          <span>
            Full stack developer who builds stuff that has real impact, mainly
            with nextjs. I love to live on the cutting edge and try new things.
          </span>
        </div>
      </section>
    </div>
  );
}

const getData = async () => {
  const file = readFileSync("./private/map.json", "utf8");
  return JSON.parse(file);
};

export const getConfig = async () => {
  return {
    render: "static",
  };
};
