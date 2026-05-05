import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { ProjectCard } from '@/components/molecules/ProjectCard'
import { PROJECTS } from '@/constants/projects'

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0A0A0A]">
       <div className="max-w-7xl mx-auto px-6">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <div className="flex flex-col items-center text-center w-full mb-12">
             <SectionTitle label="// proyectos" title="Mi Trabajo" />
             <p className="text-[#A3A3A3] text-center max-w-2xl mt-4">
               Proyectos seleccionados que reflejan mi proceso y stack técnico.
             </p>
           </div>
         </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
