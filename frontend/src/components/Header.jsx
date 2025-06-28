import { useState } from "react";
import SearchAi from "./SearchAi";

const Header = () => {
  const [notification, setNotification] = useState(1);
  return (
  <header className="flex items-center justify-between px-5 py-8 bg-white shadow">


  <div className="flex items-center w-1/2 max-w-md flex-col">
  <SearchAi/>

   
  </div>

  {/* Notification */}
  <p className="text-lg font-medium flex items-center relative">
    <span className="absolute bg-red-600 h-5 w-5 flex items-center justify-center text-xs rounded-full text-white -top-2 left-[70px]">
      {notification}
    </span>
    Notification
  </p>
</header>

  );
};

export default Header;
