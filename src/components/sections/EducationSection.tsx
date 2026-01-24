"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"
import { GraduationCap, Users } from "lucide-react"

export function EducationSection() {
    return (
        <section id="education" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
            <div className="space-y-16">
                {/* Education - Big & Horizontal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
                                <GraduationCap className="w-10 h-10" />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{portfolioData.education[0].school}</h2>
                                <p className="text-xl text-blue-400 font-medium">{portfolioData.education[0].degree}</p>
                            </div>
                        </div>
                        <div className="text-right md:text-left self-start md:self-center">
                            <p className="text-xl text-gray-300 font-medium">{portfolioData.education[0].period}</p>
                            <p className="text-gray-500">{portfolioData.education[0].location}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Leadership - Simple List */}
                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="w-8 h-8 text-blue-400" />
                            <h2 className="text-3xl font-bold text-white">Leadership</h2>
                        </div>
                        <p className="text-gray-400">
                            Community leadership and mentorship roles where I've made an impact.
                        </p>
                    </div>

                    <div className="md:col-span-8">
                        <div className="space-y-6">
                            {portfolioData.leadership.map((role, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-blue-400" />
                                    <div>
                                        <h3 className="text-lg font-bold text-white">
                                            {role.role}, {role.organization}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed mt-1">
                                            {role.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
