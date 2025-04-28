import React from "react";
import { Briefcase, MonitorSmartphone, Code2 } from "lucide-react";

function Experience() {
  const experiences = [
    {
      icon: <Briefcase className="text-teal-400 w-6 h-6" />,
      title: "Child and Adult Workforce Volunteer",
      company: "ELATT | London, UK",
      period: "Jun 2024 - Aug 2024",
      description:
        "Assisted the lead instructor in delivering software development lessons, provided one-on-one support, helped debug issues, and maintained a positive learning environment.",
    },
    {
      icon: <Code2 className="text-blue-400 w-6 h-6" />,
      title: "Front-end Developer",
      company: "CSC e-Governance Service India LTD | Delhi, India",
      period: "Jul 2021 - Mar 2023",
      description:
        "Engineered responsive UI using Micro-Frontend architecture, developed reusable React/Next.js components, styled with SASS/Tailwind, collaborated on Figma-to-code handoffs, secured user inputs, used Axios for data flow, and integrated APIs in a Headless CMS ecosystem.",
    },
    {
      icon: <MonitorSmartphone className="text-pink-400 w-6 h-6" />,
      title: "Digital Designer",
      company: "Expanglobal | Gurugram, India",
      period: "Jun 2019 - Jul 2021",
      description:
        "Maintained company site with scalable code, ensured design consistency, led design-to-code initiatives, collaborated with marketing, optimized for performance, and designed various marketing assets.",
    },
    {
      icon: <Briefcase className="text-yellow-400 w-6 h-6" />,
      title: "Junior Software Engineer",
      company: "Ifrita Web Solution | Faridabad, India",
      period: "Aug 2018 - Jun 2019",
      description:
        "Built and customized WordPress sites, optimized performance, participated in code reviews, and worked with HTML, CSS, JS, PHP, Bootstrap, and tools like VS Code and Photoshop.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">
          Experience
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-700 border border-slate-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {exp.icon}
                <h3 className="text-xl font-semibold">{exp.title}</h3>
              </div>
              <p className="text-sm text-slate-300 mb-1">{exp.company}</p>
              <p className="text-sm text-slate-400 mb-3">{exp.period}</p>
              <p className="text-slate-200 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
