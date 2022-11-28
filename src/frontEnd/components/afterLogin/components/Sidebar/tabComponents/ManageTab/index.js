import { Box, useTheme } from "@mui/material";
import React from "react";
import { Header } from "../Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../../../../../once/chartData/mockData";
import { useTranslation } from "react-i18next";

export const ManageTab = () => {
  const theme = useTheme();
  const colors = theme.palette;
  const { t } = useTranslation();

  const columns = [
    { field: "id", headerName: `${t("id")}`, flex: 0.5 },
    { field: "registrarId", headerName: `${t("registrarID")}` },
    {
      field: "name",
      headerName: `${t("name")}`,
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: `${t("age")}`,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: `${t("phone")}`,
      flex: 1,
    },
    {
      field: "email",
      headerName: `${t("email")}`,
      flex: 1,
    },
    {
      field: "address",
      headerName: `${t("assress")}`,
      flex: 1,
    },
    {
      field: "city",
      headerName: `${t("city")}`,
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: `${t("zip")}`,
      flex: 1,
    },
  ];

  return (
    <>
      <Header
        title={t('contacts')}
        subtitle={t('contactsDec')}
      />
      <Box
        m="-17px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.success.light,
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary.main,
            color: "#fff",
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.primary.main,
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey.light} !important`,
          },
        }}>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </>
  );
};
