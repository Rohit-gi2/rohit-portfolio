"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="hero-section lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero-copy col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <span className="hero-name">Rohit</span>
                    </h1>
                    <p className="hero-role-container">
                        <TypeAnimation
                            sequence={[
                                "Software Engineer",
                                3000,
                                "Front-End Engineer",
                                3000,
                                "Full-stack Software Developer",
                                3000,
                            ]}
                            wrapper="span"
                            className="hero-role"
                            speed={20}
                            repeat={Infinity}
                        />
                    </p>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Skilled in developing full-stack scalable software applications and user interfaces for AI-powered features, with a strong focus on learning emerging technologies to enhance usability and contribute meaningfully to product success.
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-blue-500 hover:bg-slate-200 text-white"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/rohit-k96/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-teal-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                             Connect
                            </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero-visual col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
                        <Image
                            src="/images/agent-workflow.svg"
                            alt="Abstract illustration of an AI agent workflow"
                            fill
                            priority
                            sizes="(max-width: 1024px) 250px, 400px"
                            className="object-contain"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;