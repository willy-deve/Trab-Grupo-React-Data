import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import Grid from '@mui/material/Grid'

import { Modal } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import Logo from '../../assets/image/Logo-Dataload.png'
import Formulario from '../Contact/Formulario'
import Avatarx from '../Contact/Avatarx'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function scrollx() {
  document.querySelector('#Products')?.scrollIntoView()
}

function squad() {
  document.querySelector('#Squad')?.scrollIntoView()
}

const Header = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // Sorteamos um numero de 1 a 3
  const quem = Math.floor(Math.random() * 3)

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'flex', md: 'block' }, mr: 1 }}>
              <img src={Logo} alt="logo" height="50" width="150" />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={scrollx}
              >
                PRODUCTS
              </Button>

              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={squad}
              >
                SQUAD
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={handleOpen}
              >
                CONTACT
              </Button>
            </Box>

            <FacebookIcon sx={{ fontSize: 30, mr: 1 }} />
            <InstagramIcon sx={{ fontSize: 30, mr: 5 }} />
          </Toolbar>
        </Container>
      </AppBar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" />
          <Grid container>
            <Grid
              item
              md={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Typography variant="h5">
                {quem === 0 && <Avatarx nome="Andre" sigla="AN" />}
                {quem === 1 && <Avatarx nome="Sammile" sigla="SM" />}
                {quem === 2 && <Avatarx nome="Willy" sigla="WL" />}
              </Typography>
            </Grid>
          </Grid>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Formulario />
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
export default Header
