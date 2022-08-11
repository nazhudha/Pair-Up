import React from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Index from "./index.css";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";

// componants
import UserCardsContainer from "../../Welcome/AllUserCardsContainer";
import JoinButton from "../Componants/JoinButton";
import { color } from "@mui/system";
// import ProjectBanner from "./components/ProjectBanner";

const paperStyle = {
  padding: 15,
  height: "15vh",
  width: "auto",
  margin: "0px auto",
  left: 100,
};

const paperStyle2 = {
  padding: 10,
  height: "10vh",
  width: 200,
  margin: "20px auto",
};
const paperStyle3 = {
  padding: 10,
  height: "30vh",
  width: 1300,
  margin: "-180px auto",
};
const paperStyle4 = {
  padding: 10,
  height: "5vh",
  width: 200,
  margin: "200px auto",
};

export default function ProjectPage({ project }) {
  // console.log(project)
  return (
    <>
      {/* banner */}
      <div>
        <Paper className="color3" elevation={5} style={paperStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "0vh",
            }}
          >
            <small>{project.category} </small>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "5vh",
            }}
          >
            <strong> {project.name}</strong>
          </div>
          <div>
            <strong>Join this project </strong>
            <JoinButton projectId={project._id} />
          </div>
          <br />
          <br />
          <h4>
            Difficulty: {project.difficulty} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            Commitment: {project.commitmentLevel}&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; Session Length: Roughly {project.preferedSessionLength} hour
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Team Size: {project.users.length}
            /{project.numberOfAdditionalUsersNeeded}
          </h4>
        </Paper>

        
        <div className="boxcontainer">
          <Box>
            <Paper
              sx={{
                color: "black",
                backgroundColor: "#b7bfe4",
                border: "2px black solid",
                bottom: 0,
              }}
              className="color2"
              elevation={10}
              style={paperStyle2}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "10vh",
                }}
              >
                <strong>Skills we have: </strong>
                {project.langWeHave.map((languange) => {
                  return `   ${languange} `;
                })}
                <br />
                <div>
                  <strong>Skills we need </strong>
                  {project.langWeNeed.map((languange) => {
                    return `${languange} `;
                  })}
                </div>
              </div>
            </Paper>
          </Box>
        </div>

        <br />
      </div>

      <Paper className="color2" elevation={10} style={paperStyle3}>
        <div>
          <h5>Summary: {project.summary}</h5>
          <h5>Description: {project.description}</h5>
        </div>
      </Paper>

      <Paper className="color2" elevation={10} style={paperStyle4}>
        <strong
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "5vh",
          }}
        >
          Users in this project{" "}
        </strong>
      </Paper>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "0vh",
        }}
      >
        <br />
        <UserCardsContainer usersData={project.users} />
      </div>
    </>
  );
}
