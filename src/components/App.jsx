import { Profile } from "./Profile/Profile.jsx";
import user from '../components/Profile/user.json'
import { Statistics } from './Statistics/Statistics.jsx'
import data from './Statistics/data.json'
import { FriendList } from './FriendList/FriendList.jsx'
import friends from './FriendList/friends.json'
// import { HystoryTransactions } from './HystoryTransactions/HystoryTransactions.jsx'
// import transactions from './HystoryTransactions/transactions.json'


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 41,
      //   color: '#010101',
      // }}
    >
      <Profile user ={user}/>
      <Statistics data={data} title = "Hello"/>
      <FriendList friends={friends} />

    
    </div>
  );
};
