const UserList = ({ userItem, handleClick }) => {
  //console.log(userItem);
  return (
    <ul className="user-list">
      {userItem && userItem.length
        ? userItem.map((item, index) => (
            <li onClick={() => handleClick(item)} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default UserList;
