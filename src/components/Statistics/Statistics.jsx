import PropTypes from "prop-types";
import { StatsList } from "./StatsList";
import css from './Statistics.module.css'

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title.length > 0 && (<h2 className={css.title}>{title}</h2>)}
            
    
            <ul className={css.stat_list}>
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

