import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { deepPurple } from '@mui/material/colors'
import { Typography } from '@mui/material'

interface IAvatarProps {
  nome: string
  sigla: string
}

const Avatarx: React.FC<IAvatarProps> = ({ nome, sigla }) => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{sigla}</Avatar>
        <Typography>
          <b>{nome.toUpperCase()}</b> irá entrar em contado com você. Deixe seus
          dados abaixo
        </Typography>
      </Stack>
    </div>
  )
}

export default Avatarx
