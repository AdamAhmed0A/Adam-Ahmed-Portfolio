import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, OrbitControls } from '@react-three/drei';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TailwindCSS', 'Bootstrap'],
    color: '#00ffff',
    position: [-4, 2, 0] as [number, number, number]
  },
  {
    title: 'Backend',
    skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'Python', 'RESTful APIs'],
    color: '#ff00ff',
    position: [4, 2, 0] as [number, number, number]
  },
  {
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
    color: '#00ff88',
    position: [-4, -2, 0] as [number, number, number]
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'GraphQL', 'API Integration'],
    color: '#ff8800',
    position: [4, -2, 0] as [number, number, number]
  }
];

function Skill3D({ skill, position, color }: { skill: string; position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function Skills3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#00ffff" intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={0.5} />
      
      {skillCategories.map((category, categoryIndex) => 
        category.skills.map((skill, skillIndex) => (
          <Skill3D
            key={`${category.title}-${skill}`}
            skill={skill}
            position={[
              category.position[0] + (skillIndex % 3 - 1) * 0.8,
              category.position[1] + (Math.floor(skillIndex / 3) - 1) * 0.8,
              category.position[2] + (skillIndex % 2) * 0.5
            ]}
            color={category.color}
          />
        ))
      )}
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
            Skills & Expertise
          </h2>
          <p className="text-cosmic-body text-xl max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications, 
            from concept to deployment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-96 glass-card rounded-3xl overflow-hidden"
          >
            <Skills3DScene />
          </motion.div>

          {/* Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: selectedCategory === category.title ? category.color : 'transparent',
                  boxShadow: selectedCategory === category.title ? `0 0 30px ${category.color}50` : 'none'
                }}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.title ? null : category.title
                )}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-cosmic-heading text-xl font-bold">
                    {category.title}
                  </h3>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: selectedCategory === category.title ? 'auto' : '60px',
                    opacity: selectedCategory === category.title ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110"
                        style={{
                          backgroundColor: `${category.color}20`,
                          color: category.color,
                          border: `1px solid ${category.color}30`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Specialization Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto border-2 border-primary/30">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary animate-pulse-glow" />
              <h3 className="text-cosmic-heading text-3xl font-bold">
                Laravel Specialist
              </h3>
              <div className="w-8 h-8 rounded-full bg-primary animate-pulse-glow" />
            </div>
            <p className="text-cosmic-body text-lg leading-relaxed">
              With <span className="text-primary font-bold">2+ years of dedicated Laravel experience</span>, 
              I specialize in building robust, scalable web applications. From API development to 
              full-stack solutions, I bring deep expertise in the Laravel ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}