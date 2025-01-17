import React from "react";

const NotificationPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            {/* Avatar */}
            <span className="text-4xl font-bold">👤</span>
          </div>
          <h2 className="text-lg font-bold mt-4">Notifications</h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            You’re all caught up! Check back later for new notifications.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-full">
            View settings
          </button>
        </div>

        {/* Filters Section */}
        <div className="mt-8">
          <h3 className="text-sm font-bold mb-2">Filters</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">Unread</span>
              <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">High Priority</span>
              <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">In Progress</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Tags"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Users"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Priority</label>
              <input type="range" className="w-full" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Status</h3>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Done
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> In Progress
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Cancelled
                </label>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full">
              Apply Filters
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="space-y-6">
          {/* Recent Notifications */}
          <div>
            <h2 className="text-lg font-bold mb-4">Recent</h2>
            <div className="bg-white p-4 rounded shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold">DAILY RUNDOWN: WEDNESDAY</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Income tax sops on the cards, The bias in VC funding, and other top news for you
                </p>
              </div>
              <p className="text-sm text-gray-500">3d</p>
            </div>
          </div>

          {/* Earlier Notifications */}
          <div>
            <h2 className="text-lg font-bold mb-4">Earlier</h2>
            <div className="space-y-4">
              {[
                {
                  title: "DAILY RUNDOWN: MONDAY",
                  description: "Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.",
                  time: "3d",
                },
                {
                  title: "DAILY RUNDOWN: SATURDAY",
                  description: "Pellentesque semper ex diam, at tristique ipsum varius sed.",
                  time: "3d",
                },
                {
                  title: "Congratulate Gurdeep Singh Osahan for 5 years at Askbootstrap Pvt.",
                  description: "",
                  time: "4d",
                },
                {
                  title: "Congratulate Mandeep Singh for 4 years at Askbootstrap Pvt.",
                  description: "",
                  time: "4d",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded shadow-md flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationPage;
