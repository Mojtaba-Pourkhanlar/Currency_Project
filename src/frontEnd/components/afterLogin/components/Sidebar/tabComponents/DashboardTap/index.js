import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Spinner } from "../../../../../../helpers";
import { Header } from "../Header";

export const DashboardTap = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header title="dashboard" subtitle="dashboardDec" />

      <Spinner />
      <h1>{t("coming")}</h1>
    </>
  );
};
