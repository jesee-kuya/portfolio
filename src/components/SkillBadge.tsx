import React from 'react';

interface SkillBadgeProps {
  skill: string;
  delay?: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, delay = 0 }) => {
  return (
    <span 
      className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-900/50"
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  );
};