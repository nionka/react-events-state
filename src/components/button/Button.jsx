import PropTypes from 'prop-types';

export default function Button({ btn, index, selected, onSelectFilter }) {
    let isDone = false;

    if (btn === selected) {
        isDone = true;
    }
    
    return (
        <button 
            key={index}
            className={isDone ? 'done btn' : 'btn'} 
            onClick={() => onSelectFilter(btn)}
            >{btn}</button>
    )
}

Button.propTypes = {
    btn: PropTypes.string,
    index: PropTypes.number,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func
}