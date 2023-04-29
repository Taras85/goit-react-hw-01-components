import PropTypes from 'prop-types';
import  styles from './Statistics.module.css'
import {getRandomHexColor} from '../../components/utils/getRandomHexColor'


export function StatisticItem({id, label, percentage}) {
    return  <li key={id} className={styles.item} style={{backgroundColor:getRandomHexColor()}}>
            <span className={styles.label}>{label}</span><br/>
            <span className={styles.percentage}>{percentage}%</span>
            </li>
}

StatisticItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}