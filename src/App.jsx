import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-indigo-200 text-blue-900 font-sans p-6">
      {/* Header */}
      <header className="text-center mb-10">
        <img
          src="/flixprofile.jpg"
          alt="Flix Profile"
          className="mx-auto rounded-full border-4 border-blue-300 w-40 h-40 object-cover shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mt-4 text-blue-900 drop-shadow">
          Flix Vixen P. Barbero
        </h1>
        <p className="text-lg text-blue-700 font-semibold mt-2">
          Full Stack Developer | Creative Technologist
        </p>
      </header>

      {/* About Me */}
      <section className="mb-10 bg-white bg-opacity-70 backdrop-blur-md rounded-lg p-6 shadow-md border border-blue-200">
        <h2 className="text-3xl font-bold border-b-2 border-blue-400 mb-4 text-blue-800">
          About Me
          </h2>
          <p className="text-md leading-relaxed text-blue-900">
            I'm a driven full-stack developer who believes that great ideas and strong code come from continuous learning and meaningful collaboration. My journey in tech is fueled by curiosity and a deep appreciation for both front-end aesthetics and back-end logic. I specialize in JavaScript, React, and Node.js, and I'm always excited to adopt new skills, tools, and perspectives from fellow developers, designers, and innovators. Whether it's through pair programming, open-source projects, or tech communities, I'm eager to grow and help others grow alongside me.
            </p>
            </section>

      {/* Certificates */}
      <section className="mb-10 bg-white bg-opacity-70 rounded-lg p-6 shadow-md border border-blue-200">
        <h2 className="text-3xl font-bold border-b-2 border-blue-400 mb-4 text-blue-800">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: "/cert.modernai.jpg", name: "Modern AI Certification" }, 
            { img: "/Screenshot 2026-01-28 153621.png", name: "Apply AI: Update Your Resume" },
            { img: "/Screenshot 2026-01-28 153800.png", name: "AI Fundamentals with IBM SkillsBuild" },
            { img: "/cert.datascience.jpg", name: "Data Science Certificate" },
            { img: "/Screenshot 2026-01-28 153722.png", name: "Apply AI: Analyze Customer Reviews" },
          ].map((cert, idx) => (
            <div key={idx} className="text-center">
              <img
                src={cert.img}
                alt={cert.name}
                className="w-full rounded border border-blue-300 mb-2 shadow"
              />
              <p className="text-blue-900">{cert.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10 bg-white bg-opacity-70 rounded-lg p-6 shadow-md border border-blue-200">
        <h2 className="text-3xl font-bold border-b-2 border-blue-400 mb-4 text-blue-800">
          Projects / Works
        </h2>
        <div className="space-y-6">
          {[
            { title: "Calculator", path: "calculator/index.html" },
            { title: "Array", path: "array_object_Flix_Vixen/index.html" },
            { title: "Converter", path: "converter-activities-flix/index.html" },
            { title: "Add To Do", path: "todo-app/index.html" },
          ].map((proj, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-blue-100 to-purple-200 p-4 rounded-lg border border-blue-300 shadow"
            >
              <h3 className="text-xl font-bold text-blue-900">{proj.title}</h3>
              <p className="text-blue-700">Try this project</p>
              <a
                href={proj.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline"
              >
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="mt-10 bg-white bg-opacity-70 rounded-lg p-6 shadow-md border border-blue-200 text-center">
        <h2 className="text-3xl font-bold border-b-2 border-blue-400 mb-6 text-blue-800">
          Contact Me
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl text-blue-600 mb-6">
          <a href="mailto:flixvixenbarbero27@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://linkedin.com/in/flixvixenbarbero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/flixvixen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://facebook.com/flixpadillabarbero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://instagram.com/_skiflix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/flixvixen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        {/* Message Form */}
        <form
          action="mailto:flixvixenbarbero27@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-4 max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 bg-white bg-opacity-90 text-blue-900 border border-blue-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 bg-white bg-opacity-90 text-blue-900 border border-blue-300 rounded"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-2 bg-white bg-opacity-90 text-blue-900 border border-blue-300 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </footer>
    </div>
  );
};

export default Portfolio;
