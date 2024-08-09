
const ProfileCard = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="flex flex-col items-center text-center">
        <img className="mb-4 w-24 h-24 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
        <h3 className="text-xl font-semibold text-gray-900">Haitham Badran</h3>
        <p className="text-gray-600">Marketing Coordinator</p>
        <p className="mt-4 text-gray-500">“I’m a marketing coordinator who recently moved to Netherlands and I'm struggling with the Dutch language.”</p>
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-center text-gray-500">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884l8 4.917 8-4.917-8-4.917-8 4.917zM18 8.118v6.764l-8 4.917-8-4.917V8.118l8 4.917 8-4.917z"/>
            </svg>
            <span>haithambadran@gmail.com</span>
          </div>
          <div className="flex items-center justify-center text-gray-500">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2h-2V5H4v10h6v2H4a2 2 0 01-2-2V5z"/>
              <path d="M18 13.586l-4.95-4.95 1.414-1.414L18 10.758l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95z"/>
            </svg>
            <span>+31 71 131 9858</span>
          </div>
          <div className="flex items-center justify-center text-gray-500">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2C5.589 2 2 5.589 2 10s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14a6 6 0 110-12 6 6 0 010 12zM12 8.5a1 1 0 11-2 0 1 1 0 012 0zm1 2.5h-4v1h4v-1z"/>
            </svg>
            <span>6391 Elgin St. Celina, Delaware 10299</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

