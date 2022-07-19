import PropTypes from "prop-types";
import { StatsList } from "./StatsList";

export const Statistics = ({title, stats}) => {
    return (
        <section class="statistics">
        <h2 class="title">{title}</h2>
    
      <ul class="stat-list">
                {stats.map(stat => (<StatsList key={stat.id}
                    label={stat.label}
                    percentage={stat.percentage}/>))}
     </ul>


</section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,

        })
    ) 
};

