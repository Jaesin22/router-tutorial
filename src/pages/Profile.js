import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "KMJ",
    description: "love react developer",
  },
  gildong: {
    name: "gildong",
    description: "kakao developer",
  },
};

const Profile = () => {
  const params = useParams();
  console.log(params);
  const profile = data[params.username];
  console.log(profile);

  return (
    <div>
      <h1>user profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
