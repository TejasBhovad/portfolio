export const TriCol = () => {
  return (
    <div className="h-12 bg-red-800 flex">
      <div className="hidden md:flex w-full bg-purple-400 h-full"></div>
      <div className="md:min-w-3xl h-full bg-green-800 w-full"></div>
      <div className="hidden md:flex w-full bg-purple-400 h-full"></div>
    </div>
  );
};
