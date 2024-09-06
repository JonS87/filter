import { useState  } from 'react';
import { ProjectList } from '../ProjectList';
import { Toolbar } from '../Toolbar';
// import styles from './Portfolio.module.css';

export const Portfolio = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const projects = data;

  const filters = ["All", "Websites", "Flayers", "Business Cards"];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <>
      <Toolbar 
        filters={filters} 
        selected={selectedFilter} 
        onSelectFilter={setSelectedFilter} 
      />
      <ProjectList projects={filteredProjects} />
    </>
  );
};