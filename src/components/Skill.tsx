import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

export interface ISkillProps {
  name: string;
  src:string;
}

export default function Skill (props: ISkillProps) {
  return (
    <motion.div className="skill"
    initial={{ scale: 0.8 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.3 ,delay:.2 }}
    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
    <img src={props.src} alt={props.name} />
      <Typography>{props.name}</Typography>
    </motion.div>
  );
}
