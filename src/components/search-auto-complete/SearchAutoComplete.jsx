import { useEffect, useState } from "react";
import UserList from "./UserList";
import "./styles.css";

const SearchAutoComplete = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showUser, setShowUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      //console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((users) => users.firstName));
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
    if (event.target.value.trim().length > 1) {
      setFilteredUsers(
        users.filter((user) =>
          user.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
      setShowUser(true);
    } else {
      setShowUser(false);
    }
  };

  const handleClick = (user) => {
    setSearchText(user);
    setShowUser(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <input
        className="search-input"
        type="text"
        value={searchText}
        placeholder="Search Users..."
        onChange={handleChange}
      />

      {showUser && (
        <UserList handleClick={handleClick} userItem={filteredUsers} />
      )}
    </div>
  );
};

export default SearchAutoComplete;
