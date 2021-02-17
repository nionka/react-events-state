import Button from '../button/Button';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
    const { filters, selected } = props;
    return (
        <div className='toolbar'>
            {filters.map((btn, index) => <Button 
            key={index} 
            btn={btn} 
            index={index} 
            selected={selected}
            onSelectFilter={props.onSelectFilter} />)}
        </div>
    );
}

Toolbar.propTypes = {
    filters: PropTypes.array,
    selested: PropTypes.string
}