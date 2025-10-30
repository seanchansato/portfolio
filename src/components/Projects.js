import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import ImageGallery from './ImageGallery';

const projects = [
  {
    title: 'Hack the Valley X - 1st Place Overall',
    description: 'Placed 1st Overall at Hack the Valley 2025, Canada’s second-largest hackathon with over 500 participants. My team and I built PlantHopper, a 360° AI-powered autonomous plant watering system that uses computer vision and soil moisture sensors to identify, track, and water multiple plants. We designed all components in CAD and built the system from scratch within 36 hours, integrating servos for rotation, pitch control, and water spraying.',
    image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fXjfkg4tzh/itxui1eh_expires_30_days.png',
    link: 'https://devpost.com/software/plant-hopper',
    linkText: 'Devpost',
  },
  {
    title: '1010W Robotics - Team Captain',
    description: 'Team Captain of Ten Ton Robotics 1010W. Led the mechanical, build, hardware, prototyping, design and documentation. Placed 2nd and 3rd out of 20,000+ teams worldwide at the VEX Robotics World Championships in 2023 and 2025. Received over 70+ awards internationally, 4 years consecutively #1 Ranked Robotics Team in Canada, and created a YouTube channel with over 250,000+ views.',
    video: '/videoplayback.mp4',
    type: 'video',
    image: '/cover.jpg',
    link: 'https://www.youtube.com/@1010W_TenTon',
    linkText: 'YouTube',
  },
  {
    title: 'Pursuit Robotics - Founder',
    description: 'Founded Pursuit Robotics Society to provide free robotics education to youth, empowering students through hands-on learning experiences. Developed a curriculum using the VEX IQ system and raised $5,000+ to fund program materials, inspiring innovation and fostering critical thinking. Collaborated with community partners and volunteers to create an inclusive environment, ensuring all students have access to meaningful STEM opportunities.',
    image: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fXjfkg4tzh/zyi8o40r_expires_30_days.png',
    link: '#',
    linkText: ''
  },
];



const ProjectCard = ({ project, reverse, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      // poster is automatically shown (do not clear /hide the image)
    }
  };
  return (
    <motion.article
      className={`group relative w-full my-10 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(255,255,255,0.20)]`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-6 md:p-8 ${reverse ? 'md:[&>a]:order-2' : ''}`}
      >
        <a
          href={project.link || '#'}
          target="_blank"
          rel="noreferrer"
          className="group relative block rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-transform duration-300"
        >
          {project.type === 'video' && project.video ? (
            <div className="aspect-video w-full bg-black rounded-xl ring-1 ring-white/10 shadow-[inset_0_2px_8px_rgba(255,255,255,0.08),inset_0_-4px_12px_rgba(0,0,0,0.35)]">
              <video
                ref={videoRef}
                src={project.video}
                poster={project.image}
                className="h-full w-full object-cover rounded-xl"
                muted
                playsInline
                preload="metadata"
              />
            </div>
          ) : (
            <div className="aspect-video w-full bg-white/5 rounded-xl ring-1 ring-white/10 shadow-[inset_0_2px_8px_rgba(255,255,255,0.08),inset_0_-4px_12px_rgba(0,0,0,0.35)]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>

        <div className="space-y-5">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">{project.title}</h3>
          {project.description && (
            <p className="text-white/70 leading-relaxed">{project.description}</p>
          )}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors shadow-sm"
              >
                {project.linkText || 'View Project'}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
    </motion.article>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white w-full">
      <div className="px-40">
        <h2 className="text-5xl font-bold mb-8">PROJECTS</h2>
        <ImageGallery className="mb-16" />
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} reverse={index % 2 !== 0} className={index === 0 ? 'mt-48' : ''} isLast={index === projects.length - 1} />
        ))}
      </div>
    </section>
  )
}
