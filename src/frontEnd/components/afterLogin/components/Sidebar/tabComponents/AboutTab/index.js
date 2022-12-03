import { Header } from "../Header";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Details from "./Details";
import ContactMe from "./ContactMe";
import Skills from "./Skills";

export const AboutTab = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title={t("mojtaba")} subtitle={t("mojtabaDec")} />
      <Details />
      <Skills />
      <ContactMe />
    </>
  );
};
