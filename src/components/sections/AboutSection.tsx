import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Heart } from 'lucide-react';

export default function AboutSection() {
  const timelineEvents = [
    {
      year: '2021',
      title: 'Started Programming Journey',
      description: 'Began learning web development fundamentals',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: '2023',
      title: 'Laravel Specialization',
      description: 'Focused on PHP Laravel development',
      icon: <Heart className="w-5 h-5" />
    },
    {
      year: '2024',
      title: 'Full Stack Mastery',
      description: 'Mastered both frontend and backend technologies',
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-cosmic-title text-5xl md:text-6xl font-bold mb-8">
            About Me
          </h2>
          <p className="text-cosmic-body text-xl max-w-4xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Web Developer who believes in the power of combining 
            <span className="text-primary font-semibold"> art with code</span>. 
            Since starting my programming journey in 2021, I've been dedicated to creating 
            unique digital experiences that push the boundaries of web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-cosmic-heading text-2xl font-bold mb-6">
                Personal Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-cosmic-body">
                    Cairo, Egypt 🇪🇬
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-cosmic-body">
                    Computer Engineering Student at NCTU
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-cosmic-body">
                    Passionate about Art + Code
                  </span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
                <h4 className="text-cosmic-heading font-semibold mb-3">Languages</h4>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    Arabic (Native)
                  </span>
                  <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    English (Fluent)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-cosmic-heading text-2xl font-bold text-center mb-8">
              My Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent"></div>
              
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start gap-6 pb-8 last:pb-0"
                >
                  {/* Timeline Node */}
                  <div className="flex-shrink-0 w-16 h-16 glass-panel rounded-full flex items-center justify-center text-primary">
                    {event.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="glass-card p-6 rounded-2xl flex-grow">
                    <div className="text-cosmic-title text-lg font-bold mb-2">
                      {event.year}
                    </div>
                    <h4 className="text-cosmic-heading font-bold mb-2">
                      {event.title}
                    </h4>
                    <p className="text-cosmic-body">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-cosmic-heading text-3xl font-bold mb-6">
              My Philosophy
            </h3>
            <p className="text-cosmic-body text-lg leading-relaxed">
              I believe that great code is like art - it should be beautiful, functional, and inspiring. 
              Every project I work on is an opportunity to push creative boundaries while solving real-world problems. 
              I'm always learning, always improving, and always ready to tackle the next challenge with 
              <span className="text-primary font-semibold"> passion and precision</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}