import PropTypes from "prop-types";
 
export const FriendListItem = ({id, avatar, name, isOnline}) => {
    return (<li class="item">
  <span class="status"></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
</li>)
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ) 
};