import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Sparkles } from 'lucide-react';
import cosmicHero from '@/assets/cosmic-hero.jpg';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${cosmicHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-floating">
        <div className="glass-panel p-4 rounded-full">
          <Code className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 animate-floating-delayed">
        <div className="glass-panel p-4 rounded-full">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Title */}
          <motion.h1 
            className="text-cosmic-title text-6xl md:text-8xl lg:text-9xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Adam Ahmed
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-cosmic-heading text-2xl md:text-4xl">
              Full Stack Web Developer
            </h2>
            <p className="text-cosmic-body text-lg md:text-xl max-w-3xl mx-auto">
              Combining <span className="text-primary font-semibold">art with code</span> to create 
              unique digital experiences. Specialized in PHP Laravel development since 2023.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-cosmic-title text-3xl font-bold">3+</div>
              <div className="text-cosmic-body">Years Coding</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-cosmic-title text-3xl font-bold">2+</div>
              <div className="text-cosmic-body">Years Laravel</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-cosmic-title text-3xl font-bold">10+</div>
              <div className="text-cosmic-body">Technologies</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button className="btn-cosmic-primary text-lg px-8 py-4">
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="btn-cosmic-secondary text-lg px-8 py-4"
              onClick={scrollToAbout}
            >
              About Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center animate-pulse-glow">
            <ArrowDown className="w-6 h-6 text-primary mb-2" />
            <span className="text-cosmic-body text-sm">Scroll to explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}