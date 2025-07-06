import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "IAS Sanjeev Jaiswal – Portfolio Website",
      description:
        "Developed a secure, mobile-first admin console and personal portfolio site for IAS Sanjeev Jaiswal. Includes custom dashboards for HR and IT teams, real-time CMS, and automated deployments.",
      image: "./sj.png",
      tags: [
        "React.js",
        "Bootstrap",
        "REST API",
        "GitHub Actions",
        "Admin Panel",
      ],
      gradient: "from-cyan-500 to-blue-600",
      liveLink: "https://iassanjeevjaiswal.com/",
    },
    {
      title: "Naya Maharashtra – Government Blog Website",
      description:
        "Launched a responsive, SEO-friendly blog platform for IAS Sanjeev Jaiswal to improve public engagement across Maharashtra. Integrated content management and analytics for performance tracking.",
      image: "./nm.png",
      tags: ["React.js", "Bootstrap", "SEO", "CMS", "Responsive Design"],
      gradient: "from-indigo-500 to-pink-500",
      liveLink: "https://nayamaharashtra.com/",
    },
    {
      title: "Netparam Portfolio Website",
      description:
        "Engineered the company’s website with MERN stack and modular components, significantly improving speed, scalability, and deployment efficiency.",
      image: "./net.png",
      tags: ["MERN Stack", "CI/CD", "GitHub Actions", "Modular Components"],
      gradient: "from-green-400 to-blue-500",
      liveLink: "https://netapramportfolio.netlify.app/",
    },
    {
      title: "KiddoTales: Children’s Story Generator",
      description:
        "React-based web app using Gemini AI to generate personalized stories for children, with persistent storage and optimized input for better engagement.",
      image: "./story.png",
      tags: ["React.js", "TailwindCSS", "Gemini AI", "Local Storage"],
      gradient: "from-pink-400 to-yellow-500",
      liveLink: "https://kiddos-tales.netlify.app/",
    },
    {
      title: "LifeGivers: Blood and Organ Donation Platform",
      description:
        "Role-based MERN platform for donor and patient registration, real-time dashboards, and secure authentication, enabling live coordination and medical data management.",
      image: "./organ.png",
      tags: ["MERN Stack", "Authentication", "Dashboards", "REST API"],
      gradient: "from-red-500 to-rose-600",
      liveLink:
        "https://github.com/rohitkumar-14/LifeGivers-Blood-and-Organ-Donation-Platform",
    },
    {
      title: "FITFORGE – Elite Training Academy",
      description:
        "Forge your ultimate warrior physique at FITFORGE — where discipline, innovation, and relentless pursuit of excellence shape champions. A bold digital identity for an elite training experience.",
      image: "./fit.png",
      tags: ["Brand Website", "Fitness", "Motion UI", "Responsive Design"],
      gradient: "from-yellow-500 to-red-600",
      liveLink: "https://fittforge.netlify.app/",
    },
    {
      title: "LUSHBITE – Bio-Enhanced Organic Snacks",
      description:
        "LushBite represents the future of organic nutrition, combining advanced bio-enhancement with delicious taste. Designed to energize the body and sharpen the mind with every bite.",
      image: "bite.png",
      tags: [
        "React.js",
        "Landing Page",
        "Nutrition",
        "Modern UI",
        "Scroll Animation",
      ],
      gradient: "from-green-400 to-lime-500",
      liveLink: "https://lushbite.netlify.app/",
    },
  ];
  

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              My Work
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated selection of my recent work showcasing innovation,
              technical excellence, and creative problem-solving.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 bg-white animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center`}>
                  <div className="flex space-x-4">
                    <Link to={project.liveLink} target="_blank">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 bg-white/90 hover:bg-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-3 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full animate-fade-in transform hover:scale-105 transition-transform duration-200`}
                      style={{
                        animationDelay: `${index * 0.1 + tagIndex * 0.05}s`,
                        animationFillMode: "forwards",
                      }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="https://github.com/rohitkumar-14" target="_blank">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <Github className="mr-3 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
