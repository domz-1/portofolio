import { Stack } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import Skill from "../components/Skill";
import JS from '../assets/JavaScript.png';
import TS from '../assets/TypeScript.png';
import ReactIcon from '../assets/React.png';
import Redux from '../assets/Redux.png';
import BS from '../assets/Bootstrap.png';
import Html from '../assets/HTML5.png';
import Css from '../assets/CSS3.png';
import TailWend from '../assets/Tailwind CSS.png';
import MUIICON from '../assets/Material UI.png';
import Git from '../assets/Git.png';
import GitHub from '../assets/GitHub.png';
import RBS from '../assets/React Bootstrap.png';
import Sass from '../assets/Sass.png';
import StoryBook from '../assets/Storybook.png';
import Jest from '../assets/Jest.png';
import Vite from '../assets/Vite.js.png';
import Fm from '../assets/Fm.png';

export default function Skills() {
  return (
    <Stack id="skills">
      <SectionTitle title='Skills' body='My technical stack' />
      <Stack className="skill-wrapper">
        <Skill name="JavaScript" src={JS} />
        <Skill name="TypeScript" src={TS} />
        <Skill name="React" src={ReactIcon} />
        <Skill name="Redux" src={Redux} />
        <Skill name="Bootstrap" src={BS} />
        <Skill name="HTML5" src={Html} />
        <Skill name="CSS3" src={Css} />
        <Skill name="Tailwind CSS" src={TailWend} />
        <Skill name="Material UI" src={MUIICON} />
        <Skill name="Git" src={Git} />
        <Skill name="GitHub" src={GitHub} />
        <Skill name="React Bootstrap" src={RBS} />
        <Skill name="Sass" src={Sass} />
        <Skill name="Storybook" src={StoryBook} />
        <Skill name="Jest" src={Jest} />
        <Skill name="Vite.js" src={Vite} />
        <Skill name="Framer Motion" src={Fm} />

      </Stack>
    </Stack>
  );
}