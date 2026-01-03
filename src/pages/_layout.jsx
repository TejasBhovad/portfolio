import "../styles.css";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import { TriCol } from "../components/tricol";
export default async function RootLayout({ children }) {
  const data = await getData();

  return (
    <div className="font-['Nunito'] min-h-screen flex flex-col bg-background text-gray-900 antialiased">
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        precedence="font"
      />
      <div className="h-full w-full  min-h-screen flex flex-col">
        <TriCol />
        <main className="flex-1 max-w-3xl w-full h-full   mx-auto flex flex-col">
          <Navbar />
          {children}
        </main>
        <TriCol />
      </div>
    </div>
  );
}

const getData = async () => {
  const data = {
    description: "An internet website!",
    icon: "/images/favicon.png",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  };
};
