import PropTypes from 'prop-types';
import styles from './FriendList.module.css'


export function FriendListItem({avatar, name, isOnline, id}) {
    return  <li className={styles.item} key = {id}>
            <span className={styles.status} style = {{backgroundColor: isOnline ? 'green':'red'}}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{ name }</p>
</li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}