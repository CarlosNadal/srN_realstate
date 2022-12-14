import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
const Layout = ({ children }) => (
  <>
    <Head>
      <title>real State</title>
    </Head>
    <Box maxWidth="1280px" m="auto"></Box>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
    <Box />
  </>
);

export default Layout;
