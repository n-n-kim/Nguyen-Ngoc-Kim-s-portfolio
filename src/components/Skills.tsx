import {
  Code2,
  Database,
  Globe,
  GitBranch,
  Terminal,
  Boxes,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [

    {
      icon: <Globe size={24} />,
      title: "Web Development",
      skills: ["HTML/CSS", "PHP", "Tailwind CSS"],
    },
    {
      icon: <Database size={24} />,
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      icon: <GitBranch size={24} />,
      title: "Version Control",
      skills: ["Git", "GitHub"],
    },
    {
      icon: <Terminal size={24} />,
      title: "Tools & Technologies",
      skills: ["VS Code", "Docker", "REST APIs"],
    },
    {
      icon: <Boxes size={24} />,
      title: "Programming Language",
      skills: [
        "C++",
        "C++",
        "Java",
        "Python",
        "MATLAB",
        "Assembly (MIPS)",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Technical skills essential for a Software Engineer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-gray-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}