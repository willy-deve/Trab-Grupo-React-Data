import { Box, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CopyrightIcon from '@mui/icons-material/Copyright'

const Footer = () => {
  return (
    <Box
      sx={{
        with: 900,
        height: 200,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        mt: 0,
        p: 10,
      }}
    >
      <Typography variant="h6" align="center" color="#fff">
        Todos os direitos Reservados <CopyrightIcon /> 2022
      </Typography>
      <Typography variant="h6" align="center" color="#fff">
        Desenvolvido com <FavoriteBorderIcon />
      </Typography>
    </Box>
  )
}

export default Footer
