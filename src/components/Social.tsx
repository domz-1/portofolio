import { Box, IconButton } from '@mui/material';
import { Facebook, GitHub, Instagram, LinkedIn, Telegram, WhatsApp } from '@mui/icons-material';


export default function Social(){
  return (
    <Box className='social'>
      <IconButton href='https://github.com/domz-1' target='__blank'>
      <GitHub/>
      </IconButton>
      <IconButton href='https://www.linkedin.com/in/adham-abuelenin/' target='__blank'>
      <LinkedIn/>
      </IconButton>
      <IconButton href='https://www.instagram.com/domz0o' target='__blank'>
      <Instagram/>
      </IconButton>
      <IconButton href='https://t.me/domz0o' target='__blank'>
      <Telegram/>
      </IconButton>
      <IconButton href='https://wa.me/201027690928?text=Hi%20Adham%20,%0AAre%20you%20available%20for%20work%20?!' target='__blank'>
      <WhatsApp/>
      </IconButton>
      <IconButton href='https://www.facebook.com/clock.adham' target='__blank'>
      <Facebook/>
      </IconButton>
    </Box>
  )
}
