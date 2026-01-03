import { readFileSync } from "fs";

export default async function HomePage() {
  const data = await getData();

  return (
    <div className="w-full flex-1 bg-background border-2 border-muted">
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
