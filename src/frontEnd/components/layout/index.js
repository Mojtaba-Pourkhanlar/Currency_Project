import Footer from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <Footer />
    </>
  );
};
