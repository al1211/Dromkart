

const Header = () => {
  return (
<header className="flex items-center justify-between px-5 py-8  bg-white">
        <div className="flex gap-2">
            
            <button className="bg-green-50 px-3 border rounded-full text-green-900 uppercase text-sm font-bold"> Ready To Interview</button>
        </div>
        <div className="flex gap-2">
            <div className="flex items-center justify-center gap-2">
        
            <p className="text-lg font-medium flex items-center justify-center"><span className='relative bg-red-600 h-[20px] w-[20px] flex items-center justify-center  rounded-full -top-3 text-white left-2'>1</span>Notification</p>
            </div>
        
        </div>
    </header>
  )
}

export default Header