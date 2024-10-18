import Hi from '../components/Hi';
import Picture from '../components/Picture';
import { Stack } from '@mui/material';
import PicOne from '../assets/pic-1.png.jpg'


export default function Home () {
  return (
      <Stack className='Home'>
        <Stack 
        direction="row"
        className='home-row'
        >
        <Hi />
        <Picture src={PicOne} direction='right' key={1}/>
        </Stack>
    </Stack>
  );
}
