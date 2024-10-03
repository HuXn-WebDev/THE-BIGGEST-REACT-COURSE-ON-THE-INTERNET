import UserCard from "./UserCard";

const peopleToFollow = [
  { name: "Alena Gouse", following: false },
  { name: "Ruben Bator", following: true },
  { name: "Aspen Stanton", following: false },
  { name: "Madelyn George", following: false },
];

function PeopleToFollow() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">👥 People who to follow</h3>
      <div className="space-y-4">
        {peopleToFollow.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}

export default PeopleToFollow;
