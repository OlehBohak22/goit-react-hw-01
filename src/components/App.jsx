import "./App.css";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import userData from "/src/data/userData.json";
import friends from "/src/data/friends.json";
import transactionsList from "/src/data/transactions.json";
import Transactions from "./transactions/transactions";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <Transactions items={transactionsList} />
    </>
  );
}

export default App;
