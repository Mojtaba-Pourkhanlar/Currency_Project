import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { DasboardData } from "frontEnd/context/Dahsboard";
import {
  Bootstrap,
  Css,
  Git,
  Graphql,
  Html,
  Js,
  Mui,
  Next,
  React,
  Redux,
  Scss,
} from "frontEnd/assets/images/skill";
import Skill from "./Skill";

const Skills = () => {
  const {
    javascript,
    html,
    css,
    nextJs,
    reactJs,
    git,
    scss,
    redux,
    mui,
    graph,
    boot,
  } = useContext(DasboardData);

  const demo = [
    {
      id: 0,
      name: "HTML",
      icon: Html,
      color: "#E44F26",
      value: html,
    },
    {
      id: 1,
      name: "CSS",
      icon: Css,
      color: "#1572B6",
      value: css,
    },
    {
      id: 2,
      name: "JavaScript",
      icon: Js,
      color: "#F7DF1E",
      value: javascript,
    },
    {
      id: 3,
      name: "React",
      icon: React,
      color: "#00D8FF",
      value: reactJs,
    },
    {
      id: 4,
      name: "Materialui",
      icon: Mui,
      color: "#0081CB",
      value: mui,
    },
    {
      id: 5,
      name: "Git",
      icon: Git,
      color: "#DE4C36",
      value: git,
    },
    {
      id: 6,
      name: "Next",
      icon: Next,
      color: "#000000",
      value: nextJs,
    },
    {
      id: 7,
      name: "Sass",
      icon: Scss,
      color: "#CC6699",
      value: scss,
    },
    {
      id: 8,
      name: "Redux",
      icon: Redux,
      color: "#764ABC",
      value: redux,
    },
    {
      id: 9,
      name: "Bootstrap",
      icon: Bootstrap,
      color: "#563D7C",
      value: boot,
    },
    {
      id: 10,
      name: "Graphql",
      icon: Graphql,
      color: "#E535AB",
      value: graph,
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {demo.map((item) => (
            <Box key={item.id}>
              <Skill
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
