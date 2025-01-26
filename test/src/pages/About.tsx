import React from 'react';

const About: React.FC = () => {
    return (
        <div className="about-container bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 p-10 rounded-2xl shadow-2xl max-w-4xl mx-auto mt-16 transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                About Me
            </h1>
            <p className="text-xl leading-relaxed mb-6 text-gray-700">
                Hello! I'm an iOS developer with a passion for creating intuitive and engaging mobile applications. With several years of experience in the industry, I have honed my skills in Swift, Objective-C, and various iOS frameworks.
            </p>
            <p className="text-xl leading-relaxed mb-10 text-gray-700">
                I enjoy solving complex problems and continuously learning about new technologies and best practices in mobile development. My goal is to build high-quality apps that provide a seamless user experience.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Skills
            </h2>
            <ul className="grid grid-cols-2 gap-4 mb-10">
                <li className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">Swift</li>
                <li className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">Objective-C</li>
                <li className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">UIKit</li>
                <li className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">SwiftUI</li>
                <li className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">Core Data</li>
                <li className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">RESTful APIs</li>
                <li className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">Git</li>
                <li className="text-lg text-gray-700 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">Agile Methodologies</li>
            </ul>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Experience
            </h2>
            <p className="text-xl leading-relaxed mb-10 text-gray-700">
                I have worked on a variety of projects ranging from small utility apps to large-scale enterprise applications. My experience includes collaborating with cross-functional teams, participating in code reviews, and contributing to the overall architecture and design of applications.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Contact
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 text-center">
                Feel free to reach out to me via email at <a href="mailto:iosdeveloper@example.com" className="text-blue-500 underline hover:text-blue-600 transition-colors duration-300">iosdeveloper@example.com</a> or connect with me on <a href="#" className="text-blue-500 underline hover:text-blue-600 transition-colors duration-300">LinkedIn</a>.
            </p>
        </div>
    );
};

export default About;