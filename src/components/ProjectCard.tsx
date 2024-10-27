import {
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Box,
  ButtonGroup,
  Card,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { GitHub } from "@mui/icons-material";
import { useSelector } from "react-redux";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";
import { motion } from "framer-motion";

export interface IProjectCardProps {
  ImgSrc: string;
  imgPosition: "right" | "left";
  Title: string;
  technologies: string[];
  Description: string;
  Link: string;
  GitHubRepo: string;
}

interface IState {
  theme: {
    darkMode: boolean;
  };
}
const ProjectCard = (props: IProjectCardProps) => {
  const darkMode = useSelector<IState, boolean>(
    (state) => state.theme.darkMode
  );
  const theme = darkMode ? darkTheme : lightTheme;
  const cardAnimationProps = {
    initial:
      props.imgPosition === "right"
        ? { opacity: 0, x: 100 }
        : { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    whileHover: { scale: 1.008 },
    viewport: { once: true, amount: 0.1 },
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  };

  return (
    <motion.div {...cardAnimationProps} className="card">
      <Card
        className="project-card"
        sx={{
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          transition: "0.3s",
          width: "70%",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          background:
            theme === lightTheme
              ? `linear-gradient(${
                  props.imgPosition === "left" ? "-" : "+"
                }90deg,
              hsl(0deg 0% 100%) 7%,
              hsl(344deg 0% 99%) 12%,
              hsl(344deg 0% 98%) 15%,
              hsl(344deg 0% 97%) 16%,
              hsl(344deg 0% 95%) 18%,
              hsl(344deg 0% 94%) 20%,
              hsl(344deg 0% 93%) 22%,
              hsl(344deg 0% 92%) 24%,
              hsl(344deg 0% 91%) 26%,
              hsl(344deg 0% 90%) 29%,
              hsl(344deg 0% 89%) 32%,
              hsl(344deg 0% 88%) 35%,
              hsl(344deg 0% 87%) 38%,
              hsl(344deg 0% 85%) 42%,
              hsl(344deg 0% 84%) 46%,
              hsl(344deg 0% 83%) 50%,
              hsl(344deg 0% 82%) 55%,
              hsl(344deg 0% 81%) 59%,
              hsl(344deg 0% 80%) 64%,
              hsl(344deg 0% 79%) 70%,
              hsl(344deg 0% 78%) 75%,
              hsl(344deg 0% 77%) 81%,
              hsl(344deg 0% 76%) 87%,
              hsl(344deg 0% 75%) 93%,
              hsl(0deg 0% 74%) 100%)`
              : `linear-gradient(
              ${props.imgPosition === "left" ? "-" : "+"}90deg,
              hsl(228deg 17% 29%) 0%,
              hsl(228deg 17% 28%) 4%,
              hsl(229deg 16% 27%) 8%,
              hsl(229deg 16% 26%) 13%,
              hsl(229deg 16% 25%) 17%,
              hsl(230deg 15% 24%) 21%,
              hsl(230deg 15% 23%) 25%,
              hsl(231deg 15% 21%) 29%,
              hsl(231deg 15% 20%) 33%,
              hsl(231deg 14% 19%) 37%,
              hsl(232deg 14% 18%) 42%,
              hsl(232deg 13% 17%) 46%,
              hsl(233deg 13% 16%) 50%,
              hsl(233deg 13% 15%) 54%,
              hsl(234deg 12% 14%) 58%,
              hsl(234deg 12% 13%) 63%,
              hsl(235deg 11% 12%) 67%,
              hsl(235deg 11% 11%) 71%,
              hsl(236deg 10% 10%) 75%,
              hsl(238deg 9% 9%) 79%,
              hsl(238deg 10% 8%) 83%,
              hsl(239deg 10% 7%) 87%,
              hsl(239deg 11% 5%) 92%,
              hsl(240deg 13% 4%) 96%,
              hsl(240deg 11% 2%) 100%
            );`,
          minWidth: "250px",
          flexDirection: props.imgPosition === "right" ? "row-reverse" : "row",
          marginBottom: 4,
          padding: 2,
          boxShadow:
            theme === lightTheme
              ? "0px 4px 10px rgba(0, 0, 0, 0.2)"
              : "0px 4px 10px 9px rgba(255,255,255,0.11)",
        }}
      >
        <CardMedia
          component="img"
          image={props.ImgSrc}
          sx={{
            height: "auto",
            width: 350,
            objectFit: "cover",
            borderRadius: "5px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
        <CardContent
          className="project-card-content"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h2">{props.Title}</Typography>
          <Typography>{props.Description}</Typography>
          <Box>
            <Typography variant="h5">Technologies:</Typography>
            {props.technologies.map((tech, index) => (
              <Chip key={index} label={tech} sx={{ m: "5px" }} />
            ))}
          </Box>
          <ButtonGroup>
            <IconButton href={props.Link} target="_blank" rel="noreferrer">
              <LinkIcon />
            </IconButton>
            <IconButton
              href={props.GitHubRepo}
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </IconButton>
          </ButtonGroup>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
