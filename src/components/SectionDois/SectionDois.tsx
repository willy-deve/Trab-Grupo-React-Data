import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import img1 from '../../assets/image/web1.png'
import img2 from '../../assets/image/web2.png'
import img3 from '../../assets/image/web3.png'

const SectionDoisStyled = styled.div`
  .paper {
    background-color: #d6d4d48b;
    border-radius: 10px;
  }
  .paper:hover {
    transform: scale(1.04);
  }
`

const SectionDois = () => {
  return (
    <SectionDoisStyled>
      <Box sx={{ flexGrow: 1, marginTop: 10, paddingX: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              className="paper"
              elevation={4}
              sx={{
                padding: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img src={img1} alt="" width="280px" height="280px" />
              <Typography sx={{ paddingTop: 5, textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                quasi voluptatum officiis. Quo alias molestias sapiente
                voluptate magnam a omnis, voluptatibus, facere repellat
                similique neque. Labore mollitia nihil beatae rerum.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="paper"
              elevation={4}
              sx={{
                padding: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img src={img2} alt="" width="280px" height="280px" />
              <Typography sx={{ paddingTop: 5, textAlign: 'justify' }}>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                quasi voluptatum officiis. Quo alias molestias sapiente
                voluptate magnam a omnis, voluptatibus, facere repellat
                similique neque. Labore mollitia nihil beatae rerum.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              className="paper"
              elevation={4}
              sx={{
                padding: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img src={img3} alt="" width="280px" height="280px" />
              <Typography sx={{ paddingTop: 5, textAlign: 'justify' }}>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                quasi voluptatum officiis. Quo alias molestias sapiente
                voluptate magnam a omnis, voluptatibus, facere repellat
                similique neque. Labore mollitia nihil beatae rerum.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </SectionDoisStyled>
  )
}

export default SectionDois
