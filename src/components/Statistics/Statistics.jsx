import PropTypes from 'prop-types';
import styles from'./Statistics.module.css'
import { StatisticItem } from './StatisticItem'


export const Statistics = ({ data, title }) => {
    return (<section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.stat_list}>
        {data.map(datas =>(
        <StatisticItem 
        id={datas.id} 
        label={datas.label} 
        percentage={datas.percentage} 
        />
        ))}
                
  </ul>
</section>)}



Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape ({
        id: PropTypes.number.isRequired
    }).isRequired).isRequired,
    title: PropTypes.string
}