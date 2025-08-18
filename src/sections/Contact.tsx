import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:kuyajesee@proton.me',
    value: 'kuyajesee@proton.me'
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/jesee-kuya',
    value: 'github.com/jesee-kuya'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jeseekuya',
    value: 'https://www.linkedin.com/in/jeseekuya'
  }
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I'm currently open to new opportunities and interesting challenges.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
                  kisumu, kenya
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
                  +254794573286
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up delay-200">
              <div className="space-y-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <Icon className="mr-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{link.label}</div>
                        <div className="text-gray-600 dark:text-gray-300">{link.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};