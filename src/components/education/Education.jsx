import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institute: "Bangladesh University of Business and Technology (BUBT)",
    year: "2022 - Present",
    location: "Mirpur, Dhaka, Bangladesh",
  },
  {
    degree: "HSC (Science)",
    institute: " Netrakona Govt.  College",
    year: "2018 - 2020",
    gpa: "GPA: 4.83 / 5.00",
    location: "Dhaka, Bangladesh",
  },
  {
    degree: "SSC (Science)",
    institute: "Dutt High School",
    year: "2016 - 2018",
    gpa: "GPA: 4.78 / 5.00",
    location: "Dhaka, Bangladesh",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-6 bg-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-cyan">Education</h2>
        <p className="text-gray-300 mb-12">
          My academic background and achievements.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="border border-cyan rounded-xl p-6 bg-[#0f172a] shadow-lg hover:shadow-cyan transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan mb-1">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institute}</p>
              <p className="text-gray-400">{edu.year}</p>
              <p className="text-white mt-2 font-medium">{edu.gpa}</p>
              <p className="flex items-center justify-center text-gray-400 mt-2">
                <FaMapMarkerAlt className="mr-2 text-cyan" /> {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
