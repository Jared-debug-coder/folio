
import React from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-portfolio-burgundy font-medium">{percentage}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-bar transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
