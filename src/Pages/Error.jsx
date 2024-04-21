import Navbar from "../Components/Navbar/Navbar";
import Error from "../Components/Error/Error";
import Footer from "../Components/Footer/Footer";

import Helmet from "react-helmet";

export default function Call() {
  return (
    <>
      <Helmet>
        <title>Stefano Montemarli - Web Designer & Social Media Manager</title>
      </Helmet>
      <Navbar />
      <Error />
      <Footer />
    </>
  );
}
