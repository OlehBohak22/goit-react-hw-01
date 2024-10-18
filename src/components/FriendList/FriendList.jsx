import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((item) => (
        <li key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            isOnline={item.isOnline}
            name={item.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
