const ProfileCard = ({ name, bio, avatar }: any) => (
  <div className="border p-[10px] m-[10px]">
    <img src={avatar} alt={name} className="w-[10rem]" />
    <h3>{name}</h3>
    <p>{bio}</p>
  </div>
);

export default ProfileCard;
