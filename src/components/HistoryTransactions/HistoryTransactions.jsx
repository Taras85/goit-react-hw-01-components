
import History from './HistoryTransactions.module.css';
import PropTypes from 'prop-types';

export const HistoryTransactions = ({ items }) => {
    return (
        <table className={History.transactionHistory}>
            <thead>
                <tr>
                    <th className={History.event}>Type</th>
                    <th className={History.event}>Amount</th>
                    <th className={History.event}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                <tr key={id} className={History.tr}>
                    <th className={History.th}>{type}</th>
                    <th className={History.th}>{amount}</th>
                    <th className={History.th}>{currency}</th>
                </tr>))}
            </tbody>
        </table>)
}

HistoryTransactions.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape ({ 
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount:PropTypes.number.isRequired,
        currency:PropTypes.string.isRequired,
    }).isRequired
    ).isRequired
 }