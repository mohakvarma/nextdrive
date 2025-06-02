"use client"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useScrollVisibility } from "~/hooks/useScrollVisibility"
import { sectionVariants, itemVariants } from "~/constants/animations"

export default function JoinMovementSection() {
  const { ref, inView } = useScrollVisibility()

  return (
    <motion.section
      ref={ref}
      id="join-movement"
      className="px-4 lg:px-8 py-32 lg:py-48 -mb-24 -mt-24"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-[90rem] mx-auto text-center">
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-5xl lg:text-6xl font-serif font-light text-slate-800 mb-8"
            variants={itemVariants}
          >
            Join the Movement
          </motion.h2>
          <motion.p
            className="text-slate-600 text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Be part of the fight for digital ownership. Get updates on our latest cases and victories in the battle
            against the anti-ownership agenda.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
            variants={itemVariants}
          >
            <Input
              placeholder="Enter your email"
              className="bg-white border-slate-200 text-slate-800 placeholder:text-slate-400"
            />
            <Button className="bg-slate-800 text-white hover:bg-slate-700 whitespace-nowrap">
              Sign Up
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}