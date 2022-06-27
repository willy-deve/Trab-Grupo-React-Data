import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Container, Grid, Typography } from '@mui/material'
import styled from 'styled-components'
import Andre from '../../assets/image/andre.jpg'
import Samille from '../../assets/image/sam.jpg'
import Willy from '../../assets/image/willy.jpg'

const AvataresStyled = styled.div`
  background-color: #f89920;
  min-height: 500px;
  text-align: center;
`

const Avatares = () => {
  return (
    <AvataresStyled>
      <Typography
        variant="h4"
        color="white"
        align="center"
        sx={{ mt: 20, pt: 5, fontWeight: 500 }}
        id="Squad"
      >
        {' '}
        MEET OUR SQUAD
      </Typography>

      <Container sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={Andre}
              alt="aa"
              width="300"
              height="300"
              style={{ borderRadius: 200 }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={Samille}
              alt="ss"
              height="300"
              style={{ borderRadius: 200 }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={Willy}
              alt="ww"
              height="300"
              style={{
                borderRadius: 200,
                border: 15,
                borderColor: 'chocolate',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack> */}
    </AvataresStyled>
  )
}

export default Avatares
