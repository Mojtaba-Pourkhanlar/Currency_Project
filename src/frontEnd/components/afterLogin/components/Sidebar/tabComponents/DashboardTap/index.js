import { t } from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Spinner } from "../../../../../../helpers";
import { Header } from "../Header";

export const DashboardTap = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title="dashboard" subtitle="dashboardDec" />

      <Spinner />
      <h1>{t("coming")}</h1>
    </>
  );
};
