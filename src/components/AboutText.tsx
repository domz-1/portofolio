import { Typography } from "@mui/material";
import AltStack from "./AltStarck";
import { motion } from "framer-motion";

const aboutText = `
  I'm a passionate front-end developer with a strong focus on creating clean, intuitive, and performant web applications. My journey in web development began in [insert year], and since then, I’ve been continuously learning and evolving. What I love most about front-end development is the perfect blend of creativity and logic—taking an idea from concept to a functional, visually appealing product.

  My core stack includes React.js, TypeScript, and JavaScript, and I’m always looking for ways to push the boundaries of what’s possible with these tools. I enjoy leveraging frameworks like Material-UI and Tailwind CSS to create responsive, modern interfaces, and I’m equally comfortable building scalable state management solutions using React Hooks and Redux.

  While I primarily work with front-end technologies, I also have a solid understanding of the full development lifecycle, including automation and unit testing with Jest, as well as using Git and GitHub for version control and collaboration.

  Outside of code, I’m a lifelong learner and an aspiring indie hacker, constantly exploring new technologies and side projects to keep my skills sharp. I also have experience with Google Apps Script for automating workflows, and I enjoy staying organized with tools like Google Sheets and Docs.

  Beyond the technical side, I’m someone who thrives on problem-solving and collaborating with others to bring ideas to life. I believe that strong communication, attention to detail, and effective project management are just as important as the code itself.
`;

const Title : string = `Curious about me? Here’s a glimpse:`;



export default function AboutText() {
  return (
    <AltStack className="" id="">
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .8 ,amount:.5  }}
          >
          {Title.split("").map((char: string, index: number) => 
            <motion.span
            key={char + index}>{char}</motion.span>)}
        </motion.div>
      </Typography>
      <br />
      <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.5, maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '0 30px' }}>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .8 , amount:.9 }}
        >
        {aboutText.split('').map((char,index)=>
        <motion.span
          key={char + index}>
          {char}
        </motion.span>)}
        </motion.div>
      </Typography>
    </AltStack>
  );
}