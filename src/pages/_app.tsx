import { type AppType } from "next/dist/shared/lib/utils";
import Header from "../components/Header";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />;
      <Component {...pageProps} />;
    </>
  ); 
};

export default MyApp;
