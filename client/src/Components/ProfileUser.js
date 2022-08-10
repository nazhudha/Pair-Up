import React, { Component, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import GithubTable from '../Components/GithubTable';

export default function BasicCard({ info, result }) {
  const [githubinfo, setGithubInfo] = useState({ user: [] });
  const [repos, setRepos] = useState({ repository: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/' + result.user.github)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, '!111!');
        //setData(data);
        setGithubInfo(data);
      });
    fetch(`https://api.github.com/users/${result.user.github}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  return (
    <div>
      <Card sx={{ width: '50%', overflow: 'hidden', margin: 'auto' }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}

          <Typography variant="h5" component="div">
            Basic Details
          </Typography>
          <Divider />
          <Grid container spacing={2}>
            <Grid
              item
              xs={3}
              style={{ justifyContent: 'center', display: 'flex' }}
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Avatar
                src={result.user.picture}
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={6}>
              <br />
              <Typography variant="h4" component="div" gutterBottom>
                {result.user.fname} {result.user.lname}
              </Typography>
              <Typography variant="body2">
                <Typography
                  sx={{ mb: 5.5 }}
                  color="text.secondary"
                ></Typography>
                <br />
                <p>
                  {' '}
                  <b>Bio: </b>
                  {info.bio}. I have been working with responsive design
                  integration, and have experimented with several responsive
                  techniques and tools.
                </p>
                <br />
                <p>
                  <b>Email: </b>
                  {result.user.email}
                </p>
                <br />
                <p>
                  <b>Github Profile: </b>
                </p>
                <p>
                  {' '}
                  <b>Username: </b>
                  {result.user.github}
                </p>
                <p>
                  {' '}
                  <b>Followers: </b>
                  {githubinfo.followers}
                </p>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">
                <Typography
                  sx={{ mb: 5.5 }}
                  color="text.secondary"
                ></Typography>
                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >
                  <Typography component="legend">Knowledge</Typography>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography component="legend">Experience</Typography>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography component="legend">
                    Overall Performance
                  </Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br></br>
      <GithubTable repos={repos} />
    </div>
  );
}
