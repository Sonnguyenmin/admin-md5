import './header.scss';

export default function Header({ toggleCloseSidebar, toggleDarkMode, isDarkMode }) {
  return (
    <>
      <header className="header">
        <i className="uil uil-bars header-sidebar-toggle" onClick={toggleCloseSidebar}></i>
        {/* <div className="header-search">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Mời bạn tìm kiếm tại đây ..." />
        </div> */}
        <ul className="header-list-icon">
          <li className="header-item-icon" onClick={toggleDarkMode}>
            {isDarkMode ? <i className="uil uil-moonset"></i> : <i className="uil uil-sunset"></i>}
          </li>
          <li className="header-item-icon">
            <img src="/imgs/vietnam.svg" alt="" />
          </li>
          <li className="header-item-icon">
            <i className="uil uil-bell bell-icon"></i>
            <span className="bell-count">3</span>
          </li>
          <li className="header-item-icon">
            <i className="uil uil-cog"></i>
          </li>
          <li className="header-item-icon">
            <div className="header-profile">
              <img src="/imgs/img-admin/profile.png" alt="" />
              <div className="header-profile-name">
                <span>Admin</span>
                <p>Admin</p>
              </div>
              <ul className="profile-wrapper">
                <li className="profile-inner">
                  <a href="" className="profile-inner-link">
                    <i className="uil uil-user"></i>
                    Tài khoản của tôi
                  </a>
                </li>
                <li className="profile-inner">
                  <a href="" className="profile-inner-link">
                    <i className="uil uil-sign-out-alt"></i>
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
}
