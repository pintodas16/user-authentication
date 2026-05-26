



import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authentication/authenticationSlice";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  // ✅ Replace hardcoded null with Redux state
  const { user, token } = useSelector((state) => state.authentication);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 1. Add this function inside Header() — above the return
const handleNavClick = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
};

  // ✅ Logout handler
  const handleLogout = () => {
    dispatch(logout());
    setIsLogout(false);
    setIsOpen(false);
    navigate("/login");
  };

  const ProfileIcon = ({ height = 24, width = 24 }) => (
    <svg width={width} height={height} viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.57906" cy="6.27803" r="4.77803" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.00002 17.7014C0.998732 17.3655 1.07385 17.0337 1.2197 16.7311C1.67736 15.8158 2.96798 15.3307 4.03892 15.111C4.81128 14.9462 5.59431 14.836 6.38217 14.7815C7.84084 14.6533 9.30793 14.6533 10.7666 14.7815C11.5544 14.8367 12.3374 14.9468 13.1099 15.111C14.1808 15.3307 15.4714 15.77 15.9291 16.7311C16.2224 17.3479 16.2224 18.064 15.9291 18.6808C15.4714 19.6419 14.1808 20.0812 13.1099 20.2918C12.3384 20.4634 11.5551 20.5766 10.7666 20.6304C9.57937 20.7311 8.38659 20.7494 7.19681 20.6854C6.92221 20.6854 6.65677 20.6854 6.38217 20.6304C5.59663 20.5773 4.81632 20.4641 4.04807 20.2918C2.96798 20.0812 1.68652 19.6419 1.2197 18.6808C1.0746 18.3747 0.999552 18.0401 1.00002 17.7014Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const UserIcon = ({ className }) => (
    <svg className={className} width="18" height="18" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.57906" cy="6.27803" r="4.77803" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.00002 17.7014C0.998732 17.3655 1.07385 17.0337 1.2197 16.7311C1.67736 15.8158 2.96798 15.3307 4.03892 15.111C4.81128 14.9462 5.59431 14.836 6.38217 14.7815C7.84084 14.6533 9.30793 14.6533 10.7666 14.7815C11.5544 14.8367 12.3374 14.9468 13.1099 15.111C14.1808 15.3307 15.4714 15.77 15.9291 16.7311C16.2224 17.3479 16.2224 18.064 15.9291 18.6808C15.4714 19.6419 14.1808 20.0812 13.1099 20.2918C12.3384 20.4634 11.5551 20.5766 10.7666 20.6304C9.57937 20.7311 8.38659 20.7494 7.19681 20.6854C6.92221 20.6854 6.65677 20.6854 6.38217 20.6304C5.59663 20.5773 4.81632 20.4641 4.04807 20.2918C2.96798 20.0812 1.68652 19.6419 1.2197 18.6808C1.0746 18.3747 0.999552 18.0401 1.00002 17.7014Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const LogoutIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.4822 4.07996H8.06199C5.9952 4.07996 4.32007 5.75605 4.32007 7.82188V15.6964C4.32007 17.7632 5.9952 19.4393 8.06199 19.4393H14.4822" stroke="#121212" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.9729 8.3175L19.6803 11.7599M19.6803 11.7599L15.9729 15.2024M19.6803 11.7599L10.6763 11.7603" stroke="#121212" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  // ✅ Avatar — shows profile image if exists, otherwise name initial
  const Avatar = () => (
    user?.profile ? (
      <img className="h-6 w-6 rounded-full" src={user.profile} alt={user.name} />
    ) : (
      <div className="h-6 w-6 rounded-full bg-[#EEF0FF] flex items-center justify-center font-Manrope font-bold text-xs text-dark">
        {user?.name?.charAt(0).toUpperCase()}
      </div>
    )
  );

  return (
    <>
      <header className="sticky top-0 z-[100] w-full px-4.25 lg:px-16 xl:px-[4.7rem] py-6 bg-white shadow-custom border-b border-light-gray">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center z-[30]">
          {/* Logo + Nav Links */}
          <div className="flex gap-7.5">
            <Link to="/" className="font-Manrope font-extrabold text-small-heading lg:text-heading-one text-dark cursor-pointer">
              ShopHub
            </Link>
            <div className="hidden md:flex gap-3.75 xl:gap-7.5">
              {[
    
    { label: "About Us", id: "about-us" },
    { label: "FAQ's", id: "faq" },
    { label: "Contact Us", id: "contact-us" },
  ].map((item) => (
    <button
      key={item.label}
      onClick={() => handleNavClick(item.id)}
      className="font-Manrope font-normal text-small text-light-dark transition-all duration-300 hover:text-red"
    >
      {item.label}
    </button>
  ))}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
            {/* ✅ User Button */}
            <button
              onClick={() => token && user ? setIsLogout(!isLogout) : navigate("/login")}
              className={`white-btn flex items-center gap-2 px-4 py-2 rounded-xl font-Manrope font-semibold text-small border group ${isLogout ? "border-transparent" : ""} ${isLogout && user ? "bg-dark" : ""}`}
            >
              {token && user ? <Avatar /> : (
                <UserIcon className="transition-all duration-300 stroke-dark group-hover:stroke-white" />
              )}
              <span className={`capitalize ${isLogout && user ? "text-white" : ""}`}>
                {user?.name ?? "Sign In"}
              </span>
              {token && user && (
                <span className={`transition-all duration-300 ${isLogout ? "rotate-180" : "rotate-0"}`}>
                  <svg className={`transition-all duration-300 stroke-dark group-hover:stroke-white ${isLogout ? "stroke-white" : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className={`z-30 block md:hidden hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[50] transition-transform duration-700 transform ${isOpen ? "-translate-x-0" : "-translate-x-full"} w-full h-screen px-4.25 py-1 pt-20 pb-4 bg-[#fafafa] md:hidden`}>
        <div className="mt-3 flex flex-col gap-3 items-center">
          {[
            
            { label: "About Us", id: "about-us" },
            { label: "FAQ's", id: "faq" },
            { label: "Contact Us", id: "contact-us" },
          ].map((item) => (
            <button key={item.label} onClick={() => handleNavClick(item.id)}  className="px-1 flex justify-between items-center group" onClick={() => setIsOpen(false)}>
              <span className="font-Manrope font-semibold text-medium text-dark">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-7.5 flex flex-col gap-3">
          {/* ✅ Mobile User Button */}
          <button
            onClick={() => token && user ? setIsLogout(!isLogout) : navigate("/login")}
            className={`white-btn flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-Manrope font-semibold text-small border group ${isLogout ? "border-transparent" : ""} ${isLogout && user ? "bg-dark" : ""}`}
          >
            {token && user ? <Avatar /> : (
              <UserIcon className="transition-all duration-300 stroke-dark group-hover:stroke-white" />
            )}
            <span className={`capitalize ${isLogout && user ? "text-white" : ""}`}>
              {user?.name ?? "Sign In"}
            </span>
          </button>

          {isLogout && user && (
            <div className="py-2.5 flex flex-col gap-5 border border-light-gray rounded-xl">
              <Link to="/profile" className="px-5 flex gap-2" onClick={() => setIsOpen(false)}>
                <ProfileIcon height={24} width={24} />
                <p className="font-Manrope font-medium text-small text-dark">Account Info</p>
              </Link>
              {/* ✅ Mobile Sign Out */}
              <button className="flex gap-2 px-5" onClick={handleLogout}>
                <LogoutIcon />
                <p className="font-Manrope font-medium text-small text-dark">Sign Out</p>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Logout Dropdown */}
      {isLogout && user && (
        <div className="hidden md:block fixed inset-0 z-[10]" onClick={() => setIsLogout(false)}>
          <div className="max-w-7xl w-full mx-auto relative">
            <div className="absolute top-[108px] right-[5rem] w-[300px] py-5 px-5 rounded-5xl bg-white shadow-shadow-two">
              <div className="flex flex-col gap-5">
                {/* ✅ Large avatar in dropdown */}
                {user?.profile ? (
                  <img className="h-16 w-16 rounded-full" src={user.profile} alt={user.name} />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-[#EEF0FF] flex items-center justify-center font-Manrope font-bold text-2xl text-dark">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex flex-col gap-0.5">
                  <p className="font-Manrope font-semibold text-large text-[#0B0415]">{user?.name}</p>
                  <p className="font-Manrope font-normal text-email text-light-dark">{user?.email}</p>
                </div>
                <div className="h-px bg-light-gray"></div>
                <Link to="/profile" className="flex gap-2 rounded-lg" onClick={(e) => e.stopPropagation()}>
                  <ProfileIcon height={24} width={24} />
                  <p className="font-Manrope font-medium text-small text-dark">Account Info</p>
                </Link>
                {/* ✅ Desktop Sign Out */}
                <button className="flex gap-2" onClick={(e) => { e.stopPropagation(); handleLogout(); }}>
                  <LogoutIcon />
                  <p className="font-Manrope font-medium text-small text-dark">Sign Out</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;