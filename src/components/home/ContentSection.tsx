"use client"

import { motion } from "framer-motion"
import { useScrollVisibility } from "~/hooks/useScrollVisibility"
import { sectionVariants, itemVariants } from "~/constants/animations"

interface ContentSectionProps {
  title: string
  content: React.ReactNode
  backgroundColor: string
  textColor: string
  accentColor: string
  className?: string
}

export default function ContentSection({
  title,
  content,
  backgroundColor,
  textColor,
  accentColor,
  className = ""
}: ContentSectionProps) {
  const { ref, inView } = useScrollVisibility()

  return (
    <motion.section
      ref={ref}
      className={`py-16 lg:py-8 sticky top-8 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div
        className={`${backgroundColor} px-10 lg:px-16 py-16 lg:py-24 rounded-3xl mx-auto relative overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] sticky top-8`}
        variants={itemVariants}
      >
        <div className="relative z-10 max-w-[90rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div variants={itemVariants}>
              <motion.h2
                className={`text-5xl lg:text-6xl font-serif font-light ${textColor}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {title}
              </motion.h2>
            </motion.div>

            <motion.div className="relative pl-8 lg:pl-12" variants={itemVariants}>
              <div className={`absolute left-0 top-0 bottom-0 w-px ${accentColor}`}></div>
              <div className="space-y-8">
                {content}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}