import { motion } from 'framer-motion';
import { ExternalLink, Github, MessageCircle, Utensils, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'WhisperHub',
    description: 'A modern chat application with real-time messaging, user authentication, and beautiful UI. Built with focus on user experience and seamless communication.',
    icon: <MessageCircle className="w-8 h-8" />,
    tech: ['PHP', 'Laravel', 'JavaScript', 'WebSocket', 'MySQL'],
    color: '#00ffff',
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    title: 'Flavor Fiesta',
    description: 'A comprehensive food and cuisine exploration platform. Discover recipes, explore different cuisines, and connect with fellow food enthusiasts.',
    icon: <Utensils className="w-8 h-8" />,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    color: '#ff00ff',
    gradient: 'from-pink-500/20 to-purple-500/20'
  },
  {
    title: 'Event Organizer Management System',
    description: 'A sophisticated management system for organizing and tracking events. Features include scheduling, participant management, and comprehensive analytics.',
    icon: <Calendar className="w-8 h-8" />,
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: '#00ff88',
    gradient: 'from-green-500/20 to-emerald-500/20'
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className="glass-card p-8 rounded-3xl h-full transition-all duration-500 hover:scale-105 card-3d" id='project'>
        {/* Project Icon */}
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="p-4 rounded-2xl animate-pulse-glow"
            style={{ 
              backgroundColor: `${project.color}20`,
              color: project.color,
              boxShadow: `0 0 20px ${project.color}40`
            }}
          >
            {project.icon}
          </div>
          <h3 className="text-cosmic-heading text-2xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-cosmic-body text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-cosmic-heading text-sm font-bold mb-4 uppercase tracking-wider">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: `${project.color}15`,
                  color: project.color,
                  border: `1px solid ${project.color}30`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button 
            className="btn-cosmic-primary flex-1 flex items-center gap-2"
            style={{ 
              background: `linear-gradient(45deg, ${project.color}80, ${project.color}60)`,
              color: '#000'
            }}
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </Button>
          <Button 
            variant="outline"
            className="btn-cosmic-secondary flex items-center gap-2"
            style={{ 
              borderColor: project.color,
              color: project.color
            }}
          >
            <Github className="w-4 h-4" />
            Code
          </Button>
        </div>

        {/* Hover Effect Overlay */}
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${project.gradient} pointer-events-none`}
        />
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
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
            Featured Projects
          </h2>
          <p className="text-cosmic-body text-xl max-w-3xl mx-auto">
            A showcase of my passion for combining creativity with code. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-cosmic-heading text-3xl font-bold mb-6">
              Want to see more?
            </h3>
            <p className="text-cosmic-body text-lg mb-8">
              These are just a few highlights from my portfolio. I'm constantly working on new projects 
              and exploring innovative technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cosmic-primary text-lg px-8 py-4">
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </Button>
              <Button variant="outline" className="btn-cosmic-secondary text-lg px-8 py-4">
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demos
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}