const UserCard = ({ user }) => {
  const {
    avatar_url,
    bio,
    followers,
    name,
    login,
    public_repos,
    url,
    type,
    created_at,
  } = user;

  return (
    <div className="user">
      <img src={avatar_url} alt={name} />
      <h2>{name ? name : login}</h2>
      <p>{bio}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View on Github
      </a>
      <ul>
        <li>Followers: {followers}</li>
        <li>Public Repos: {public_repos}</li>
        <li>Created At: {new Date(created_at).toLocaleDateString()}</li>
        <li>Type: {type}</li>
      </ul>
    </div>
  );
};

export default UserCard;
