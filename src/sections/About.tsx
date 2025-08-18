import React from 'react';
import { SkillBadge } from '../components/SkillBadge';

const skills = ['Rust', 'Go', 'C', 'AI/ML', 'Web Dev', 'Flutter', 'Backend', 'Cloud'];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Hi there! 👋
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Jesee Kuya is a dynamic software engineer with two years of hands‑on experience at the intersection of machine learning, full‑stack development, and agile product delivery. He’s the architect behind a pioneering LightGBM‑powered clinical decision‑support model tailored for Kenyan healthcare settings. Today, Jesee channels his expertise at 01 Talent Kisumu, where he designs and builds robust, high‑performance solutions using Go, JavaScript, and Rust. Driven by a passion for automation, data safety, and cybersecurity, he continually seeks out new challenges that marry cutting‑edge technology with real‑world impact.
              </p>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Experience
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Full Stack Developer</h5>
                  <p className="text-gray-600 dark:text-gray-300">zone 01 kisumu • 2024 - present</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up delay-300">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Technologies & Skills
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} delay={index * 100} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};