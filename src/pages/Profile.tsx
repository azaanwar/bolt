export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Carol"
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-bold">Carol Dinkley</h2>
            <p className="text-gray-600">Model</p>
          </div>
        </div>
        
        <div className="mt-6 flex space-x-4">
          <div className="text-center">
            <span className="block font-bold">23</span>
            <span className="text-gray-600">Posts</span>
          </div>
          <div className="text-center">
            <span className="block font-bold">1.2k</span>
            <span className="text-gray-600">Followers</span>
          </div>
          <div className="text-center">
            <span className="block font-bold">348</span>
            <span className="text-gray-600">Following</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={`https://images.pexels.com/photos/${3965557 + i}/pexels-photo-${3965557 + i}.jpeg`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}