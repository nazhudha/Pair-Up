import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { buttonBaseClasses } from '@mui/material';
import Button from '@mui/material/Button';

export default function ProjectBanner({project}) {
  return (

      itemData.map((item) => (
        <ImageListItem >
          <ImageListItemBar
            title={project.name}
            subtitle={project.category}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label="Join this project!"
              >
                <Button variant="contained" spacing={4} sx={{
                   height: 38
                   
                   
                    }}>Join</Button>
                <Button></Button>
              </IconButton>
            }
          />
        </ImageListItem>
      ))
  );
}

const itemData = [
  {
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  }
];

// 1. get rid of map
// 2. add extra elements 
// 3. add join button
// 4. lower position
