import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");;
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <Toaster />
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "6s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Create Something
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Amazing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your vision
              to life with cutting-edge technology and creative solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 animate-fade-in-up shadow-2xl">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Send className="w-8 h-8 mr-3 text-blue-400" />
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion, Collaboration, etc."
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-3 h-5 w-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Link
                        to={`mailto:youremail@example.com?subject=${encodeURIComponent(
                          formData.subject
                        )}&body=${encodeURIComponent(
                          `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
                        )}`} className="flex items-center">
                        <Send className="mr-3 h-5 w-5" />
                        Send Message
                      </Link>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div
            className="space-y-10 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Let's connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                I'm always excited to discuss new opportunities, innovative
                projects, and creative collaborations. Whether you're a startup
                with a bold vision or an established company looking to
                modernize, let's make it happen together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "rohitk1400@gmail.com",
                  description: "Drop me a line anytime",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+91 9351027145",
                  description: "Let's talk about your project",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  info: "Jaipur , Rajasthan",
                  description: "Available for remote work worldwide",
                  gradient: "from-purple-500 to-violet-500",
                },
              ].map((contact) => (
                <div
                  key={contact.title}
                  className="group flex items-start space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-blue-300 font-medium mb-1">
                      {contact.info}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {contact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Status */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-lg">
                  Available for new projects
                </span>
              </div>
              <p className="text-gray-300">
                Let's discuss your project timeline and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
