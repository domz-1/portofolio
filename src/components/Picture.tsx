import { Box } from '@mui/material';
import { motion } from 'framer-motion';
export interface IPictureProps {
    src : string,
    alt? : string,
    direction?: "right" | "left",
}

export default function Picture (props: IPictureProps) {

return (
        <motion.div
        initial={{ 
            opacity: 0,
            y: 50 
        }}
        // الـ opacity هتتغير مرة واحدة لما العنصر يظهر
        whileInView={{ 
            opacity: 1,
            transition: {
            duration: 0.9,
            ease: "easeOut"
            }
        }}
        animate={{ 
            y: [0, -10, 0, 10, 0],
            transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
            }
        }}
        viewport={{
            once: true,
            amount: 0.3,
            margin: "50px"
        }}
        >
    <Box className='pic-container'>
        <img src={props.src} alt={props.alt} style={{
        }}/>
    </Box>
    </motion.div>
);
}
