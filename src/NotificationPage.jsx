import React from 'react'

export default function NotificationPage() {
  return (
    
          <div className='bg-green-400 h-screen w-full flex flex-row'>
      <aside className='w-1/4 bg-white p-4 shadow-md g'>
      {/* Avatar Profile */}
        <div className='flex flex-col items-center'>
          <div className='gap left-10 w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center'>
            <span className=''>asd</span>
          </div>
          <h2 className='text-lg font-bold mt-4'>Notifications</h2>
          <p className='text-sm text-gray-500 text-center mt-2'>You're all caught up! Check back late for new notifications</p>
            <button className='mt-4 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-full'>View Settings</button>
        </div>
        
        {/* Filter Sections */}
        <div className='mt-8'>
            <h3 className='text-sm mb-2 font-bold'>Filters</h3>
            <div className='mt-4 mb-3 '>
                <div className='flex flex-wrap gap-3'>
                    <span className='bg-gray-400 text-sm rounded-full px-3 py-1'>Unread</span>
                    <span className='bg-gray-400 text-sm rounded-full px-3 py-1'>Hig Priority</span>
                    <span className='bg-gray-400 text-sm rounded-full px-3 py-1'>In Progress</span>
                </div>
            </div>
            <h3 className="text-sm font-bold mb-2">Tags</h3>
            <div>
                <input 
                    type="text" 
                    placeholder='Search here'
                    className='py-1 px-3 border rounded border-gray-100'
                />
            </div>
            <h3 className="text-sm font-bold mb-2 mt-2">Popular Tags</h3>
            <div>
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
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> Read
                    </label>
                </div>
            </div>
            <h3 className="text-sm font-bold mb-2 mt-2">Users</h3>
            <div>
              <input
                type="text"
                placeholder="Users"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              />
            </div>
            <h3 className="text-sm font-bold mb-2 mt-2">Status</h3> 
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
            <button className="ml-20 mt-4 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full">
              Apply Filters
            </button>
        </div>
      </aside>
      
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