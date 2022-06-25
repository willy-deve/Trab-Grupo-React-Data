import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Container, Grid, Typography } from '@mui/material'
import Andre from '../../assets/image/andre.jpg'
import Sammille from '../../assets/image/sam.jpg'
import Willy from '../../assets/image/willy.jpg'

const Avatares = () => {
  return (
    <div>
      <Typography variant="h4" align="center" sx={{ mt: 10 }}>
        {' '}
        Meet our SQUAD
      </Typography>

      <Container sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <img src={Andre} alt="aa" style={{ borderRadius: 200 }} />
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={Sammille}
              alt="ss"
              height="330"
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
              height="330"
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
    </div>
  )
}

export default Avatares
