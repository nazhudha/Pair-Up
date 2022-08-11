import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectCard({ project }) {
  const id = project._id;
  console.log(project.owner);
  return (
    <Card sx={{ minWidth: 275, marginBottom: 3, width: 50 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Category: {project.category}
        </Typography>
        <Typography variant="h5" component="div">
          Name: {project.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Difficulty: {project.difficulty}
        </Typography>
        <Typography variant="body2">
          Summary: {project.summary}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"/project/view/" + id}>
          <Button size="small" variant="contained" style={{ fontSize: "10px" }}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
