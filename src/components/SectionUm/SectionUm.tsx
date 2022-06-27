import { AddBox } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import { Container, fontWeight } from '@mui/system'
import * as React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/image/img1.png'

const SectionUmStyled = styled.div`
  width: 100%;
  height: 50%;
`

export const SectionUm = () => {
  return (
    <SectionUmStyled>
      <Container sx={{ mt: 7 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: 500,
            }}
          >
            <Typography variant="h2" color="primary" sx={{ fontWeight: 500 }}>
              {' '}
              We are expert in Data Science & Analytics{' '}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 2,
              }}
            >
              {' '}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              voluptatibus provident quod qui sed earum quos ipsam ea saepe
              iusto rem repellendus omnis fugiat, id officiis quam dolores neque
              voluptate?{' '}
            </Typography>
          </Grid>
          <Grid item xs={10} md={6}>
            <img src={img1} alt="" height="500" />
          </Grid>
        </Grid>
      </Container>
    </SectionUmStyled>
  )
}

export default SectionUm
