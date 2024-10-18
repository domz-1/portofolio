import { Chip , Stack , Typography } from '@mui/material';
import { motion } from 'framer-motion';
export interface ISectionTitleProps {
  title: string;
  body: string;
}

export default function SectionTitle (props: ISectionTitleProps) {
  return (
    <Stack className='title'
    bgcolor='transparent'>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
      <Chip label={props.title} className='chip'/>
      <Typography>{props.body}</Typography>
      </motion.div>
    </Stack>
  );
}
