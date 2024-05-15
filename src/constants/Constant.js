import htmlIcon from '../assets/Icons/html_icon.svg';
import cssIcon from '../assets/Icons/css_icon.svg';
import tailwindIcon from '../assets/Icons/tailwind_css_icon.svg';
import bootstrapIcon from '../assets/Icons/bootstrap_icon.svg';
import javascriptIcon from '../assets/Icons/javascript_icon.svg';
import typescriptIcon from '../assets/Icons/typescript_icon.svg';
import angularIcon from '../assets/Icons/angular_icon.svg';
import reactIcon from '../assets/Icons/react_icon.svg';
import jqueryIcon from '../assets/Icons/jquery_icon.svg';
import csharpIcon from '../assets/Icons/csharp_icon.svg';
import reactQueryIcon from '../assets/Icons/react_query.svg';
import gitIcon from '../assets/Icons/git_icon.svg';
import githubIcon from '../assets/Icons/github_icon.svg';
import msSqlIcon from '../assets/Icons/ms_sql_icon.svg';
import scssIcon from '../assets/Icons/scss_icon.svg';
import nextjsIcon from '../assets/Icons/nextjs_icon.svg';
import frontendIcon from '../assets/Icons/frontend_development_icon.svg';
import shopianaAdminPanel from '../assets/projects/shopiana_admin_panel.png';
import amycollection from '../assets/projects/amycollection.png';
import hrManagment from '../assets/projects/hr_managment.png';
import shopianaWebsite from '../assets/projects/shopiana_website.png';
import timelabsWebsite from '../assets/projects/timelabs_website.png';
import cynosureWebsite from '../assets/projects/cynosure_website.png';
import snackGame from '../assets/projects/snack_game.png';

import personImage from "../assets/person.jpg";
import sketch1 from "../assets/sketches/sketch_1.jpg"

export const navLinks = [
    {
        id: 1,
        title: "Home",
        path: "/home"
    },
    {
        id: 2,
        title: "About",
        path: "/about"
    },
    {
        id: 3,
        title: "Work Experience",
        path: "/work"
    },
    {
        id: 4,
        title: "Projects",
        path: "/projects"
    },
    {
        id: 5,
        title: "Sketches",
        path: "/sketches"
    },
    {
        id: 6,
        title: "Contact",
        path: "/contact"
    },
]

export const skills = [
    {
        id: "html",
        icon: htmlIcon,
        skill: "HTML"
    },
    {
        id: "css",
        icon: cssIcon,
        skill: "CSS"
    },
    {
        id: "scss",
        icon: scssIcon,
        skill: "SCSS"
    },
    {
        id: "tailwindcss",
        icon: tailwindIcon,
        skill: "Tailwind CSS"
    },
    {
        id: "bootstrap",
        icon: bootstrapIcon,
        skill: "Bootstrap"
    },
    {
        id: "javascript",
        icon: javascriptIcon,
        skill: "Javascript"
    },
    {
        id: "typescript",
        icon: typescriptIcon,
        skill: "Typescript"
    },
    {
        id: "angular",
        icon: angularIcon,
        skill: "Angular"
    },
    {
        id: "angularMaterial",
        icon: angularIcon,
        skill: "Angular Material"
    },
    {
        id: "angularCLI",
        icon: angularIcon,
        skill: "Angular CLI"
    },
    {
        id: "react",
        icon: reactIcon,
        skill: "React.js"
    },
    {
        id: "next",
        icon: nextjsIcon,
        skill: "Next.js"
    },
    {
        id: "jquery",
        icon: jqueryIcon,
        skill: "JQuery"
    },
    {
        id: "reactQuery",
        icon: reactQueryIcon,
        skill: "React Query"
    },
    {
        id: "axios",
        icon: htmlIcon,
        skill: "Axios"
    },
    {
        id: "ajax",
        icon: htmlIcon,
        skill: "Ajax"
    },
    {
        id: "reactHooks",
        icon: reactIcon,
        skill: "React Hooks"
    },
    {
        id: "csharp",
        icon: csharpIcon,
        skill: "C#"
    },
    {
        id: "dotNetCore",
        icon: htmlIcon,
        skill: "ASP.NET Core"
    },
    {
        id: "msSql",
        icon: msSqlIcon,
        skill: "MS SQL"
    },
    {
        id: "git",
        icon: gitIcon,
        skill: "Git"
    },
    {
        id: "gitHub",
        icon: githubIcon,
        skill: "Git Hub"
    },
]

export const overviews = [
    {
        id: 1,
        icon: frontendIcon,
        skill: "Front-End Web Development"
    },
    {
        id: 2,
        icon: reactIcon,
        skill: "React Development"
    },
    {
        id: 3,
        icon: angularIcon,
        skill: "Angular Development"
    },
    {
        id: 4,
        icon: nextjsIcon,
        skill: "Next.js Development"
    },
    {
        id: 5,
        icon: jqueryIcon,
        skill: "Jquery Development"
    },
    {
        id: 6,
        icon: htmlIcon,
        skill: "API Integration"
    },
    {
        id: 7,
        icon: htmlIcon,
        skill: "Performance Optimization"
    },
    {
        id: 8,
        icon: htmlIcon,
        skill: "Code Maintenance and Documentation"
    },
    {
        id: 9,
        icon: htmlIcon,
        skill: "Project Collaboration"
    },
    {
        id: 10,
        icon: htmlIcon,
        skill: "Photography"
    },
    {
        id: 11,
        icon: htmlIcon,
        skill: "Digital Presence"
    },
    {
        id: 12,
        icon: htmlIcon,
        skill: "Sketching"
    },
]

export const projects = [
    {
        id: 1,
        name: "Shopiana - Admin Panel",
        description: "Shopiana - Admin Panel: Manage eCommerce effortlessly with Angular, Material Angular, and Tailwind CSS. Streamline operations and optimize retail experience.",
        img: shopianaAdminPanel,
        hashTag: ["#Angular", "#Material Angular", "#Tailwindcss", "Admin Panel"],
        projectUrl: "https://admin.shopiana.io/"
    },
    {
        id: 2,
        name: "Amy Collections: Elevating Elegance Online",
        description: "Amy Collections: Redefining elegance with React.js, Material UI, and Tailwind CSS for seamless shopping. Discover timeless fashion effortlessly.",
        img: amycollection,
        hashTag: ["#React.js", "#Material Ui", "#Tailwindcss", "Customer Website"],
        projectUrl: "https://www.theamycollections.com/"
    },
    {
        id: 3,
        name: "HR Management System",
        description: "The HR Management System optimizes HR processes with HTML, CSS, Bootstrap, and JQuery, ensuring a user-friendly interface for tasks like employee data management and attendance tracking.",
        img: hrManagment,
        hashTag: ["#HTML", "#CSS", "#Bootstrap", "#JQuery"],
        projectUrl: "https://ctpl.timelabs.in/"
    },
    {
        id: 4,
        name: "Shopiana Website",
        description: "Shopiana Website: Seamless online shopping with HTML, CSS, Bootstrap, and Next.js. Explore diverse products. Next.js boosts performance. Discover trends and deals!",
        img: shopianaWebsite,
        hashTag: ["#HTML", "#CSS", "#Bootstrap", "#Next.js"],
        projectUrl: "https://shopiana.io/"
    },
    {
        id: 5,
        name: "Timelabs Product Website",
        description: "Timelabs Product Website: Innovate with HTML, CSS, Bootstrap, JQuery, and .NET Core. Streamline processes with user-friendly solutions. Visit now!",
        img: timelabsWebsite,
        hashTag: ["#HTML", "#CSS", "#Bootstrap", "#JQuery", ".NET Core"],
        projectUrl: "https://www.timelabs.in/"
    },
    {
        id: 6,
        name: "Cynosure Website",
        description: "Cynosure Website: Explore innovative solutions with HTML5, CSS, and JavaScript. Experience excellence in user-focused technology. Unlock new possibilities for your business.",
        img: cynosureWebsite,
        hashTag: ["#HTML", "#CSS", "#Bootstrap", "#JQuery"],
        projectUrl: "https://www.cynosuretech.com/"
    },
    {
        id: 7,
        name: "Snack Game",
        description: "Snack Game: Navigate a hungry snake through a maze, gobbling up snacks! Built with HTML5, CSS, and JavaScript. Test your reflexes and strategy. Click to play!",
        img: snackGame,
        hashTag: ["#HTML5", "#CSS", "#Javascript"],
        projectUrl: "https://snake-game-kohl-nine.vercel.app/"
    },
]

export const testimonials = [
    {
        id: 1,
        name: "Rohit Jangid",
        message: "test",
        image: personImage
    },
    {
        id: 2,
        name: "Rohit Jangid",
        message: "test",
        image: personImage
    },
    {
        id: 3,
        name: "Rohit Jangid",
        message: "test",
        image: personImage
    },
    {
        id: 4,
        name: "Rohit Jangid",
        message: "test",
        image: personImage
    }
]

export const sketches = [
    {
        id: 1,
        image: sketch1,
    },
    {
        id: 2,
        image: sketch1,
    },
    {
        id: 3,
        image: sketch1,
    },
    {
        id: 4,
        image: sketch1,
    },
    {
        id: 5,
        image: sketch1,
    },
    {
        id: 6,
        image: sketch1,
    },
    {
        id: 7,
        image: sketch1,
    },
    {
        id: 8,
        image: sketch1,
    },
    {
        id: 9,
        image: sketch1,
    },
    {
        id: 10,
        image: sketch1,
    },
    {
        id: 11,
        image: sketch1,
    },
    {
        id: 12,
        image: sketch1,
    },
]