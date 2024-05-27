import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
        <Card
          title="Front End Development"
          des="Create user interface for website or other interactive media from UI/UX design using frameworks like ReactJs,Redux,Tailwind CSS and Material UI."
         
        />
        <Card
          title="Backend Web Development"
          des="Work on server-side software that is essential for every scalable application. Focusing on backend logics, queries with MongoDB databases and REST APIs using Node Js and Express Js."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Full Stack Web Development"
          des="Know how to maintain a fully-fledged and functionning platform with databases and servers in MERN Stack."
          icon={<SiProgress />}
        />
        <Card
          title="Deployment and Implementing CI/CD Pipelines"
          des="Knowledge of deploying websites and implementing CI/CD pipelines using Jenkins,Docker,GitHub Actions,AWS EC2 AND S3 bucket."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features;