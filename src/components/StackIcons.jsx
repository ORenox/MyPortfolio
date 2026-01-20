import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJava,
  FaPython,
  FaAndroid,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiSpringboot,
  SiKotlin,
} from "react-icons/si";




const frontend = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
];
const backend = [
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  {name: "Python",
  icon: (
    <FaPython style={{ fill: "url(#pythonGradient)" }} />
  ),
},
  { name: "Java", icon: <FaJava style={{fill: "url(#javaGradient)"}} />},
  { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
];

const mobile = [
  { name: "Android", icon: <FaAndroid />, color: "text-green-500" },
  { name: "Kotlin", icon: <SiKotlin />, color: "text-purple-500" },
];

const tools = [
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "Docker", icon: <FaDocker />, color: "text-sky-500" },
];

function StackIcons() {
  return (
    <section className="mt-16 text-center">

      <svg width="0" height="0">
        <defs>
          <linearGradient id="pythonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="35%" stopColor="#3776AB" />   {/* Azul Python */}
            <stop offset="100%" stopColor="#FFD43B" /> {/* Amarillo Python */}
          </linearGradient>
        </defs>
      </svg>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="javaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff0000" />  {/* Rojo puro */}
            <stop offset="90%" stopColor="#0066ff" /> {/* Azul eléctrico */}
          </linearGradient>
        </defs>
      </svg>




      <h2 className="text-2xl font-semibold mb-8">
        Experience with:
      </h2>

      <div className="grid md:grid-cols-4 gap-12 max-w-4xl mx-auto">
        
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-text">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-3xl">
            {frontend.map((tech, index) => (
              <div
                key={index}
                className={`
                    flex flex-col items-center
                    ${tech.color}
                    opacity-80
                    transition-all
                    duration-200
                    hover:opacity-100
                    hover:scale-125
                    `}
                title={tech.name}
              >
                {tech.icon}
                <span className="text-sm text-text mt-1">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-text">
            Backend
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-3xl">
            {backend.map((tech, index) => (
              <div
                key={index}
                className={`
                    flex flex-col items-center
                    ${tech.color || ""}
                    ${tech.className || ""}
                    opacity-80
                    transition-all
                    duration-200
                    hover:opacity-100
                    hover:scale-125
                    `}
                title={tech.name}
              >
                {tech.icon}
                <span className="text-sm mt-1 text-text">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-text">
            Mobile
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-3xl">
            {mobile.map((tech, index) => (
              <div
                key={index}
                className={`
                    flex flex-col items-center
                    ${tech.color}
                    opacity-80
                    transition-all
                    duration-200
                    hover:opacity-100
                    hover:scale-125
                    `}
                title={tech.name}
              >
                {tech.icon}
                <span className="text-sm mt-1 text-text">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Others  */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-text">
            Tools & Others
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-3xl">
            {tools.map((tech, index) => (
              <div
                key={index}
                className={`
                    flex flex-col items-center
                    ${tech.color}
                    opacity-80
                    transition-all
                    duration-200
                    hover:opacity-100
                    hover:scale-125
                    `}
                title={tech.name}
              >
                {tech.icon}
                <span className="text-sm mt-1 text-text">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default StackIcons;