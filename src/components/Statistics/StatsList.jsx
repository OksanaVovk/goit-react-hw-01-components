import PropTypes from "prop-types";

export const StatsList = ({id, label, percentage}) => {
    return (<li class="item" key={id}>
                <span class="label">{label}</span>
                <span class="percentage">{percentage}%</span>
        </li>)
};

StatsList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,

        })
    ) 
};