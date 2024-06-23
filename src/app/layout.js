import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import { getPagesData } from "@/lib/api";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   description: "Yalis Information Security",
// };

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  let headerData = {};
  let serviceEntries = [];
  const fetchData = async () => {
    try {
      const [headerResponse, serviceResponse] = await Promise.all([
        getPagesData("header"),
        getPagesData("services"),
      ]);
      headerData = headerResponse?.items?.[0]?.fields || {};
      serviceEntries = serviceResponse?.items || [];
    } catch (error) {
      notFound();
    }
  };

  await fetchData();

  const favicon = headerData?.favicon?.fields?.file?.url || "";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon} />
        <link
          crossOrigin="anonymous"
          as="style"
          rel="stylesheet preload prefetch"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <Layout
          children={children}
          headerData={headerData}
          serviceEntries={serviceEntries}
        />
        <ToastContainer autoClose={2000} />
      </body>
    </html>
  );
}
