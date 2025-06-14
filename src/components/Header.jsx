import { useState } from "react";

const Header = () => {
  const [notification, setNotification] = useState(1);
  return (
    <header className="flex items-center justify-end px-5 py-8  bg-white">
      <div className="flex gap-2">
        <div className="flex items-center justify-end gap-2">
          <p className="text-lg font-medium flex items-center justify-center">
            <span className="relative bg-red-600 h-[20px] w-[20px] flex items-center justify-center  rounded-full -top-3 text-white left-2">
              {notification}
            </span>
            Notification
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
