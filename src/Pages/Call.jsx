import Navbar from "../Components/Navbar/Navbar";
import CallConfermata from "../Components/CallConfermata/Call";
import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet";

export default function Call() {
  return (
    <>
      <Helmet>
        <title>Stefano Montemarli</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <CallConfermata />
      <Footer />
    </>
  );
}
