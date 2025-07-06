import {
  Code,
  Database,
  Smartphone,
  Palette,
  Zap,
  Globe,
  Wrench,
  Server,
  FileCode,
  Layers,
  Box,
  GitBranch,
  Figma,
  Monitor,
  Zap as Lightning,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Front-End Development",
      skills: [
        { name: "HTML5", icon: FileCode },
        { name: "CSS3", icon: Palette },
        { name: "JavaScript (ES6+)", icon: Code },
        { name: "React.js", icon: Code },
        { name: "Bootstrap", icon: Layers },
        { name: "TailwindCSS", icon: Palette },
        { name: "Responsive Design", icon: Smartphone },
        { name: "ShadcnUI", icon: Box },
      ],
      color: "from-blue-500 to-cyan-500",
      description: "Creating stunning, responsive user interfaces",
    },
    {
      icon: Server,
      title: "Back-End Development",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Python (Basic)", icon: Code },
        { name: "Express", icon: Lightning },
      ],
      color: "from-green-500 to-emerald-500",
      description: "Building robust server-side applications",
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
      ],
      color: "from-purple-500 to-violet-500",
      description: "Managing and optimizing data storage",
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      skills: [
        { name: "Git/GitHub", icon: GitBranch },
        { name: "BitBucket", icon: GitBranch },
        { name: "Figma", icon: Figma },
        { name: "Visual Studio", icon: Monitor },
        { name: "Postman", icon: Zap },
        { name: "Zustand", icon: Box },
      ],
      color: "from-orange-500 to-red-500",
      description: "Essential tools for modern development",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Technical Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Proficient in modern web technologies and development tools,
              delivering full-stack solutions with attention to detail and
              performance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{category.description}</p>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 animate-fade-in group-hover:translate-x-1 border border-gray-200/50"
                        style={{
                          animationDelay: `${index * 0.2 + skillIndex * 0.1}s`,
                          animationFillMode: "forwards",
                        }}>
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                          <skill.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            {
              number: "8+",
              label: "Frontend Technologies",
              color: "from-blue-500 to-cyan-500",
            },
            {
              number: "3+",
              label: "Backend Technologies",
              color: "from-green-500 to-emerald-500",
            },
            {
              number: "3",
              label: "Database Systems",
              color: "from-purple-500 to-violet-500",
            },
            {
              number: "6+",
              label: "Development Tools",
              color: "from-orange-500 to-red-500",
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-gray-200/50"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
              <div
                className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
