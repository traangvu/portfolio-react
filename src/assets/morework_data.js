import work1 from '../assets/portfolio_project_img.png'
import work2 from '../assets/minimal_project_img.jpeg'
import work3 from '../assets/taskbeat_project_img.png'
import work4 from '../assets/suomisprint_project_img.png'
import work5 from '../assets/design_pattern_project_img.png'
import work6 from '../assets/receipt_project_img.png'

const morework_data = [
    {
        w_img: work1,
        title: "Portfolio Website",
        description: "A responsive and animated portfolio site showcasing developer projects, about section, and contact form. Built for easy customization.",
        techStack: ["React", "CSS", "Framer Motion"],
        github: "https://github.com/traangvu/portfolio-react"
        },
        {
        w_img: work2,
        title: "The Minimal NoteApp",
        description: "A mock online store with dynamic product listings, cart functionality, and checkout simulation. Includes responsive filters and pagination.",
        techStack: ["React", "Redux", "Bootstrap"],
        github: "https://github.com/yourusername/ecommerce-platform"
        },
        {
        w_img: work3,
        title: "Task Beat - Android mobile app (",
        description: "Content management system where users can write blogs in Markdown. Features include tagging, search, and dark/light theme toggle.",
        techStack: ["Next.js", "Tailwind CSS", "Markdown"],
        github: "https://github.com/yourusername/blog-cms"
        },
        {
        w_img: work4,
        title: "SuomiSprint - Finnish Language Educational Platform",
        description: "This is a MERN (MongoDB, Express.js, React, Node.js) full-stack application designed for online Finnish language courses. It incorporates essential features such as authentication and authorization using JWT (JSON Web Tokens) for secure access. User passwords are securely hashed using bcrypt for data protection. The application is hosted on Render for reliable deployment, and testing is implemented using Supertest and Jest to ensure its functionality and reliability.",
        techStack: ["Javascript", "MERN (MongoDB, Express.js, React, Node.js)", "JWT (JSON Web Tokens)", "Supertest, Jest", "Render"],
        github: "https://github.com/A-Yerkeshev/suomisprint"
        },
        {
        w_img: work5,
        title: "Design Pattern in Java",
        description: "A project providing the chance to practice and understand 22 design patterns (behavioral, creational, and structural design pattern types. The tasks gave a proper view on object oriented software design and architecture.",
        techStack: ["Java", "OOP", "Description and Modelling Technique"],
        github: "https://github.com/yourusername/landing-page"
        },
        {
        w_img: work6,
        title: "Receipt uploader Backend",
        description: " An image uploader service for receipt scanning capable of storing a photo of a receipt and returning it in different resolutions for use in the UI tools. A minimalistic permissions system was implemented, so that only the users can see their own receipts. Design the API with the use case in mind",
        techStack: ["Go", "RESTful API", "GraphQL", "Built-in Go testing"],
        github: "https://github.com/traangvu/zevoy.git"
        }
    ];
    
    export default morework_data;