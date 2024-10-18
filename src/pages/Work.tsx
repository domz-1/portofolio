
import AltStack from "../components/AltStarck";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import Curd from '../assets/Projects/Curd.jpg'
import FreeBlog from '../assets/Projects/free-blog.png'
import Ecommerce from '../assets/Projects/ecom.png'
import GuessGame from '../assets/Projects/guessgame.jpg'
export default function Work () {
  return (
    <AltStack className="work" id="work">
        <SectionTitle title="Work" body="My Recent Projects"/>
        <ProjectCard 
        Title="Free Blog"
        Description="This project is a blog application built with React and Vite, featuring user authentication, protected routes, and CRUD operations for blog posts." 
        GitHubRepo="https://github.com/domz-1/Free-Space-Blog.git" 
        ImgSrc={FreeBlog}
        Link="https://domz-blog.netlify.app/"  
        technologies={["React","React Router", "Vite" , "Redux Toolkit" , "Material-UI" , "Firebase" , "Formik" ,"Yup", "Sass" ]} 
        imgPosition="left" 
        />
        <ProjectCard 
        Title="E-commerce"
        Description="This is an E-commerce application built with React. It provides a modern and responsive user interface for online shopping experiences." 
        GitHubRepo="https://github.com/domz-1/E-commerce-React-App.git" 
        ImgSrc={Ecommerce}
        Link="https://domz-ecommerce.netlify.app/"  
        imgPosition="right" 
        technologies={["React","React Router","Animate.css", "Redux Toolkit" , "ReactBootstrap" , "SweetAlert" ]} 
        />
        <ProjectCard 
        Title="Curd React App"
        Description=" A simple React application for performing CRUD (Create, Read, Update, Delete) operations. The app interacts with a mock backend using JSON Server." 
        GitHubRepo="https://github.com/domz-1/CURD.git" 
        ImgSrc={Curd}
        Link="https://domz-curd.netlify.app/"  
        technologies={["React","React-Router", "Json-server" , "axios"]} 
        imgPosition="left" 
        />
        <ProjectCard 
        Title="Guess Game"
        Description="This project is a blog application built with React and Vite, featuring user authentication, protected routes, and CRUD operations for blog posts." 
        GitHubRepo="https://github.com/domz-1/Guess-Game.git" 
        ImgSrc={GuessGame}
        Link="https://domz-guess-game.netlify.app/"  
        technologies={["Html" , "Css" , "Javascript"]} 
        imgPosition="right" 
        />
    </AltStack>
  );
}
