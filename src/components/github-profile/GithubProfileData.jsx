import { useEffect, useState } from "react";
import UserCard from "./userCard";
import "./styles.css";

const GithubProfileData = () => {
  const [profileName, setProfileName] = useState("MITHU9");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${profileName}`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setProfileData(data);
        setProfileName("");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchProfileData();
  };

  useEffect(() => {
    fetchProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          onChange={(e) => setProfileName(e.target.value)}
          name="profile"
          value={profileName}
          type="text"
          placeholder="Enter Github Username..."
        />
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </div>
      {profileData !== null ? <UserCard user={profileData} /> : null}
    </div>
  );
};

export default GithubProfileData;
