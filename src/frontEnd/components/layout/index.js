import Footer from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header login={true}/>
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <Footer />
    </>
  );
};
