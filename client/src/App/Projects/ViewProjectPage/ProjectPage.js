import React from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Index from "./index.css";

// componants
import UserCardsContainer from "../../Welcome/AllUserCardsContainer";
import JoinButton from "../Componants/JoinButton";
import { color } from "@mui/system";
const paperStyle = {
  padding: 15,
  height: "15vh",
  width: 1300,
  margin: "0px auto",
  left: 100,
};

const paperStyle2 = {
  padding: 10,
  height: "10vh",
  width: 800,
  margin: "20px auto",
};
const paperStyle3 = {
  padding: 10,
  height: "30vh",
  width: 1300,
  margin: "-10px auto",
};
const paperStyle4 = {
  padding: 10,
  height: "5vh",
  width: 200,
  margin: "20px auto",
};
export default function ProjectPage({ project }) {
  // console.log(project)
  return (
    <>
      {/* banner */}
      <div>
        <Paper className="color" elevation={10} style={paperStyle}>
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

          <br />
          <br />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "0vh",
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

        <Paper className="color2" elevation={10} style={paperStyle2}>
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

        <br />
      </div>
      {/* Summary and Description */}
      <Paper className="color" elevation={10} style={paperStyle3}>
        <div>
          <h5>Summary: {project.summary}</h5>
          <h5>Description: {project.description}</h5>
        </div>
      </Paper>
      {/* Join this project */}

      {/* Skills we have */}

      {/* Skills we need */}

      {/* Users in this project */}

      <Paper className="color" elevation={10} style={paperStyle4}>
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
          height: "40vh",
        }}
      >
        <br />
        <UserCardsContainer usersData={project.users} />
      </div>

      {/* Map of users*/}
    </>
  );
}
