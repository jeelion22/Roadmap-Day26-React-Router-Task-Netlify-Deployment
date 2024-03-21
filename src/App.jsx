import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Datascience from "./Datascience";
import Fullstackdevelopment from "./Fullstackdevelopment";
import Cybersecurity from "./Cybersecurity";
import All from "./All";
import Home from "./Home";

function App() {
  const [cybersecurityCourse, setCybersecurityCourse] = useState([]);
  const [datascienceCourse, setDataScienceCourse] = useState([]);
  const [fullstackCourse, setFullstackCourse] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  const courses = [
    {
      name: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      author: "Oct 05, 2023",
      date: "26 Oct, 2023",
      duration: "4 Min Read",
      category: "cybersecurity",
      view: "Latest",
      img: "8bfd01c18be1b5059bc0d7770d9dabf1.gif",
    },
    {
      name: "What Is Hacking? Types of Hacking & More",
      author: "Meghana D",
      date: "26 Oct, 2023",
      duration: "6 Min Read",
      category: "cybersecurity",
      view: "Latest",
      img: "Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp",
    },
    {
      name: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author: "Tushar Vinocha",
      date: "04 Oct, 2023",
      duration: "5 Min Read",
      category: "cybersecurity",
      view: 1641,
      img: "Yellow-Blue-Illustration-Business-Blog-Banner-1200x675.png",
    },
    {
      name: "Now Become A Full Stack Developer In 90 Days!",
      author: "Archana",
      date: "08 Sep, 2023",
      duration: "4 min Read",
      category: "fullstack",
      view: 1175,
      img: "Full-Stack-Developer.png",
    },
    {
      name: "<strong>How Long Would It Take to Learn Data Science?</strong>",
      author: "Meghana D",
      date: "20 Oct, 2023",
      duration: "4 min Read",
      category: "datascience",
      view: 1172,
      img: "How-Long-Would-It-Take-to-Learn-Data-Science-1200x628.png",
    },
    {
      name: "Can A Commerce Student Do Data Science?",
      author: "Saakshi Priyadarshini",
      date: "08 Sep, 2023",
      duration: "3 Min Read",
      category: "datascience",
      view: 1641,
      img: "5.-data-science-1200x628.png",
    },
    {
      name: "Roles and Responsibilities of a Data Scientist",
      author: "Jaishree Tomar",
      date: "20 Oct, 2023",
      duration: "5 Min Read",
      category: "datascience",
      view: 1641,
      img: "image-4-1200x676.png",
    },
    {
      name: "How to become a Data Scientist after Mechanical Engineering?",
      author: "Lahari Chandana",
      date: "03 Oct, 2023",
      duration: "3 Min Read",
      category: "datascience",
      view: 1172,
      img: "paper-analysis-2-1200x800.jpg",
    },
    {
      name: "Best Full-Stack Development Project Ideas in 2024",
      author: "Isha Sharma",
      date: "13 Dec, 2023",
      duration: "4 min Read",
      category: "fullstack",
      view: 6126,
      img: "person-front-computer-working-html-1200x801.jpg",
    },
    {
      name: "10 Best Database Management Systems For Software Developers",
      author: "Isha Sharma",
      date: "3 Nov, 2023",
      duration: "3 min Read",
      category: "fullstack",
      view: 2626,
      img: "DBMS1.png",
    },
    {
      name: "How Long Would It Take to Be a Full Stack Developer?",
      author: "Meghana D",
      date: "20 Oct, 2023",
      duration: "3 min Read",
      category: "fullstack",
      view: 4645,
      img: "how-long-it-would-it-take-to-learn-full-stack-development_-1200x628.webp",
    },
    {
      name: "8 Top Full Stack Web Developer Coding Projects For You!",
      author: "Archana",
      date: "3 Nov, 2023",
      duration: "8 Min Read",
      category: "fullstack",
      view: 2235,
      img: "The-Good-Life-GoDaddy-Store-Image-10-600x250.jpg",
    },
    {
      name: "6 Essential Prerequisites For Learning ReactJS",
      author: "Ramkumar",
      date: "06 Oct, 2023",
      duration: "3 Min Read",
      category: "fullstack",
      view: 3099,
      img: "react-600x314.jpg",
    },
    {
      name: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author: "Isha Sharma",
      date: "13 Dec, 2023",
      duration: "6 Min Read",
      category: "datascience",
      view: 2429,
      img: "Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp",
    },
    {
      name: "Data Science vs Data Analytics | Best Career Choice in 2024",
      author: "Lahari Chandana",
      date: "16 Mar, 2024",
      duration: "3 Min Read",
      category: "datascience",
      view: 1301,
      img: "Your-paragraph-text-1200x600.png",
    },
  ];

  useEffect(() => {
    const cybersecurity = courses.filter(
      (course) => course.category === "cybersecurity"
    );
    const datascicence = courses.filter(
      (course) => course.category === "datascience"
    );

    const fullstack = courses.filter(
      (course) => course.category === "fullstack"
    );

    setAllCourses(courses);

    setCybersecurityCourse(cybersecurity);
    setDataScienceCourse(datascicence);
    setFullstackCourse(fullstack);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/all" element={<All allCourses={allCourses} />} />

        <Route
          path="/fullstack"
          element={<Fullstackdevelopment fullstackCourse={fullstackCourse} />}
        />
        <Route
          path="/datascience"
          element={<Datascience datascienceCourse={datascienceCourse} />}
        />
        <Route
          path="/cybersecurity"
          element={<Cybersecurity cybersecurityCourse={cybersecurityCourse} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
