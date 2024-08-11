// src/components/LabelFilter.tsx
import React, { useState } from 'react';
import '../styles/App.css';

interface LabelFilterProps {
  labels: string[];
  selectedLabel: string;
  onSelectLabel: (label: string) => void;
}

const LabelFilter: React.FC<LabelFilterProps> = ({ labels, selectedLabel, onSelectLabel }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLabels = labels.filter(label => label.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="label-filter">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by labels"
      />
      <div className="label-list">
        {filteredLabels.map((label, index) => (
          <span
            key={index}
            className={`label-item ${selectedLabel === label ? 'selected' : ''}`}
            onClick={() => onSelectLabel(label)}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LabelFilter;
