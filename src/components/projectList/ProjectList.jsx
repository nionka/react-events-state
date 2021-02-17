import PropTypes from 'prop-types';

export default function ProjectList ({ projects }) {
    return (
        <div className="project-list">
            {projects.map(elem => <img key={elem.id} src={elem.img} alt={elem.category}></img>)}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array
}