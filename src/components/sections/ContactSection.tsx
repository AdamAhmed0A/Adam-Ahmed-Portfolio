import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'adamshawky222@example.com',
      color: '#00ffff'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Cairo, Egypt',
      color: '#ff00ff'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Response Time',
      value: 'Within 24 hours',
      color: '#00ff88'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-cosmic-title text-5xl md:text-6xl font-bold mb-8">
            Let's Connect
          </h2>
          <p className="text-cosmic-body text-xl max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project 
            and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-cosmic-heading text-2xl font-bold mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/5"
                  >
                    <div 
                      className="p-3 rounded-xl"
                      style={{ 
                        backgroundColor: `${info.color}20`,
                        color: info.color
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-cosmic-heading font-semibold">
                        {info.title}
                      </h4>
                      <p className="text-cosmic-body">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-8 rounded-3xl text-center"
            >
              <h4 className="text-cosmic-heading text-xl font-bold mb-4">
                Ready to Start?
              </h4>
              <p className="text-cosmic-body mb-6">
                I'm always excited to work on new challenges and innovative projects.
              </p>
              <Button className="btn-cosmic-primary w-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-cosmic-heading text-2xl font-bold mb-8">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-cosmic-body text-sm font-medium mb-2 block">
                  Your Name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                  placeholder="Adam Ahmed"
                  required
                />
              </div>

              <div>
                <label className="text-cosmic-body text-sm font-medium mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="text-cosmic-body text-sm font-medium mb-2 block">
                  Your Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-primary min-h-32"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="btn-cosmic-primary w-full text-lg py-4"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 rounded-3xl">
            <p className="text-cosmic-body">
              © 2024 Adam Ahmed. Crafted with passion and code in Cairo, Egypt.
            </p>
            <p className="text-cosmic-body text-sm mt-2 opacity-70">
              Combining art with code to create unique digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}