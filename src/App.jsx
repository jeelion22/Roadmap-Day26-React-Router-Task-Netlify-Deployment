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
      img: "https://media.licdn.com/dms/image/D5612AQGCLlLMl0atlg/article-cover_image-shrink_720_1280/0/1700584259771?e=2147483647&v=beta&t=s0XjCXxEtCNtnJqQYM7XMQsuvRPKhn8S_EcPqXVe75w",
    },
    {
      name: "What Is Hacking? Types of Hacking & More",
      author: "Meghana D",
      date: "26 Oct, 2023",
      duration: "6 Min Read",
      category: "cybersecurity",
      view: "Latest",
      img: "https://cxotoday.com/wp-content/uploads/2023/05/Cybersecurity.jpeg",
    },
    {
      name: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author: "Tushar Vinocha",
      date: "04 Oct, 2023",
      duration: "5 Min Read",
      category: "cybersecurity",
      view: 1641,
      img: "https://apicms.thestar.com.my/uploads/images/2023/06/27/2147131.jpg",
    },
    {
      name: "Now Become A Full Stack Developer In 90 Days!",
      author: "Archana",
      date: "08 Sep, 2023",
      duration: "4 min Read",
      category: "fullstack",
      view: 1175,
      img: "https://miro.medium.com/v2/resize:fit:1400/0*cl7fc6pt1MHjIF4K.png",
    },
    {
      name: "<strong>How Long Would It Take to Learn Data Science?</strong>",
      author: "Meghana D",
      date: "20 Oct, 2023",
      duration: "4 min Read",
      category: "datascience",
      view: 1172,
      img: "https://www.shutterstock.com/image-photo/data-science-deep-learning-artificial-260nw-1247255884.jpg",
    },
    {
      name: "Can A Commerce Student Do Data Science?",
      author: "Saakshi Priyadarshini",
      date: "08 Sep, 2023",
      duration: "3 Min Read",
      category: "datascience",
      view: 1641,
      img: "https://static.vecteezy.com/system/resources/thumbnails/013/030/138/small/big-data-science-analysis-information-technology-concept-server-room-background-photo.jpg",
    },
    {
      name: "Roles and Responsibilities of a Data Scientist",
      author: "Jaishree Tomar",
      date: "20 Oct, 2023",
      duration: "5 Min Read",
      category: "datascience",
      view: 1641,
      img: "https://miro.medium.com/v2/resize:fit:1200/1*f-0MUEuaILWShigxdiqkjw.jpeg",
    },
    {
      name: "How to become a Data Scientist after Mechanical Engineering?",
      author: "Lahari Chandana",
      date: "03 Oct, 2023",
      duration: "3 Min Read",
      category: "datascience",
      view: 1172,
      img: "https://imageio.forbes.com/specials-images/imageserve/635f79fbf214917bd2876e03/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    },
    {
      name: "Best Full-Stack Development Project Ideas in 2024",
      author: "Isha Sharma",
      date: "13 Dec, 2023",
      duration: "4 min Read",
      category: "fullstack",
      view: 6126,
      img: "https://www.softsuave.com/blog/wp-content/uploads/2023/01/fullstack-development.png",
    },
    {
      name: "10 Best Database Management Systems For Software Developers",
      author: "Isha Sharma",
      date: "3 Nov, 2023",
      duration: "3 min Read",
      category: "fullstack",
      view: 2626,
      img: "https://www.peerbits.com/static/6c4dcb6b85772db4b733e5eec6ccf308/77381/full-stack-development-main.jpg",
    },
    {
      name: "How Long Would It Take to Be a Full Stack Developer?",
      author: "Meghana D",
      date: "20 Oct, 2023",
      duration: "3 min Read",
      category: "fullstack",
      view: 4645,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpxFr3sGrIJhiJMsbDuOmYMFzsjs_TETwPcF-KzFiRQ&s",
    },
    {
      name: "8 Top Full Stack Web Developer Coding Projects For You!",
      author: "Archana",
      date: "3 Nov, 2023",
      duration: "8 Min Read",
      category: "fullstack",
      view: 2235,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdq04Sr2_KDqLHkqVCMoJ1W8hFRswBwUCRY_W5z3FdciEkDWnaR6J-Qdm5qbdLA_f8IU&usqp=CAU",
    },
    {
      name: "6 Essential Prerequisites For Learning ReactJS",
      author: "Ramkumar",
      date: "06 Oct, 2023",
      duration: "3 Min Read",
      category: "fullstack",
      view: 3099,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxG4eLbDBbYDuUl2RN8NluAv6_lVtagfwIm5yUEk8TzpddmV70MA8J94M6TpkVanPgIw&usqp=CAU",
    },
    {
      name: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author: "Isha Sharma",
      date: "13 Dec, 2023",
      duration: "6 Min Read",
      category: "datascience",
      view: 2429,
      img: "https://iabac.org/blog/uploads/images/202307/image_870x_64ad296d30216.jpg",
    },
    {
      name: "Data Science vs Data Analytics | Best Career Choice in 2024",
      author: "Lahari Chandana",
      date: "16 Mar, 2024",
      duration: "3 Min Read",
      category: "datascience",
      view: 1301,
      img: "https://brainalyst.in/wp-content/uploads/2022/08/Its-Scope-In-The-Future.jpg",
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
