import styles from './ProjectList.module.css';

export const ProjectList = ({ projects }) => {
  return (
    <div className={ styles.cards }>
      {projects.map((project, index) => (
        <img className={ styles.card } key={index} src={project.img} alt={project.category} />
      ))}
    </div>
  );
};