const Content = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 ml-[10rem]">
      <h2 className="text-2xl font-bold">Welcome to the Dashboard!</h2>
      <p className="mt-4">Here are your stats for today:</p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg">Total Users</h3>
          <p className="text-xl font-semibold">1,245</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg">Revenue</h3>
          <p className="text-xl font-semibold">$4,850</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
