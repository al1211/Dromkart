import React from 'react'

const Header = () => {
  return (
<header className="flex items-center justify-between px-5 py-8  border-b-1  bg-white">
        <div className="flex gap-2">
            
            <button className="bg-green-50 px-3 border rounded-full text-green-900 uppercase text-sm font-bold"> Ready To Interview</button>
        </div>
        <div className="flex gap-2">
            <div className="flex items-center justify-center gap-2">
            {/* <PiNotificationLight /> */}
            <p className="text-lg font-medium">Notification</p>
            </div>
           {/* <img className="h-10 w-10 border rounded-full" src={user} alt=""/>   */}
        </div>
    </header>
  )
}

export default Header