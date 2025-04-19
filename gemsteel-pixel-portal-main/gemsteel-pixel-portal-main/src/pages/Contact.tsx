import { useState } from "react";
import Layout from "@/components/Layout";
import { MessageSquare, MessagesSquare, AlertTriangle, Send, Mail } from "lucide-react";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "bug-report", // Default subject
    message: "",
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "bug-report",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-minecraft-dark py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <MessageSquare className="text-minecraft-accent mr-3" size={32} />
            <h1 className="minecraft-title text-3xl md:text-4xl">Contact & Support</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Discord Section */}
            <div className="minecraft-card flex flex-col items-center text-center">
              <MessagesSquare className="text-minecraft-accent mb-4" size={48} />
              <h2 className="minecraft-title text-xl mb-4">Join Our Discord</h2>
              <p className="text-gray-300 mb-6">
                Connect with other players, get help, and stay updated with the latest server news.
              </p>
              <a 
                href="https://discord.gg/7yQEDY8xPh" 
                className="minecraft-button mt-auto" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </div>
            
            {/* Bug Reports */}
            <div className="minecraft-card flex flex-col items-center text-center">
              <AlertTriangle className="text-minecraft-accent mb-4" size={48} />
              <h2 className="minecraft-title text-xl mb-4">Report Issues</h2>
              <p className="text-gray-300 mb-6">
                Found a bug or want to report a player? Let us know using the form below.
              </p>
              <a 
                href="#contact-form" 
                className="minecraft-button mt-auto"
              >
                Report Issue
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="minecraft-card" id="contact-form">
            <div className="flex items-center mb-6">
              <Mail className="text-minecraft-accent mr-3" size={24} />
              <h2 className="minecraft-title text-2xl">Contact Form</h2>
            </div>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                  <Send className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-minecraft text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thanks for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-minecraft text-sm">
                      Your Name / Minecraft Username
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-minecraft-black/50 border border-minecraft-accent/30 rounded-md p-3 text-white focus:border-minecraft-accent focus:outline-none focus:ring-1 focus:ring-minecraft-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-minecraft text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-minecraft-black/50 border border-minecraft-accent/30 rounded-md p-3 text-white focus:border-minecraft-accent focus:outline-none focus:ring-1 focus:ring-minecraft-accent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2 font-minecraft text-sm">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-minecraft-black/50 border border-minecraft-accent/30 rounded-md p-3 text-white focus:border-minecraft-accent focus:outline-none focus:ring-1 focus:ring-minecraft-accent"
                  >
                    <option value="bug-report">Bug Report</option>
                    <option value="player-report">Report a Player</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-minecraft text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-minecraft-black/50 border border-minecraft-accent/30 rounded-md p-3 text-white focus:border-minecraft-accent focus:outline-none focus:ring-1 focus:ring-minecraft-accent resize-none"
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="minecraft-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
