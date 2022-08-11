import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import profilePic from "./images/profile-pic-stock.webp"; //test
import Grid from "@material-ui/core/Grid";

export default function NewUserCard({ user }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={user.picture} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${user.fname} ${user.lname}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${user.fname} is a ${user.skill} coder who knows ${user.languages.length} languages.`}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="space-between">
        <Link to={{pathname: `/profile/${user._id}`}}>
          <Button variant="contained" size="small" style={{ fontSize: "10px" }}>
            Profile
          </Button>
        </Link>
          <Link to="/pairnow">
            <Button variant="contained" size="small" style={{ fontSize: "10px" }}>
              Pair now
            </Button>
          </Link>
        </Grid>
      </CardActions>
    </Card>
  );
}


