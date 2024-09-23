import React, { useState } from 'react';
import SideBar from '../components/sidebar/SideBar';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const modeLocal = JSON.parse(localStorage.getItem('mode')) || 'light';
    return modeLocal === 'light' ? false : true;
  });
  const [isClose, setIsClose] = useState(() => {
    const closeLocal = JSON.parse(localStorage.getItem('close')) || 'notClose';
    return closeLocal === 'notClose' ? false : true;
  });

  const toggleDarkMode = () => {
    const updateMode = isDarkMode === true ? false : true;
    setIsDarkMode(updateMode);
    localStorage.setItem('mode', JSON.stringify(updateMode));
  };

  const toggleCloseSidebar = () => {
    const updateClose = isClose === true ? false : true;
    setIsClose(updateClose);
    localStorage.setItem('close', JSON.stringify(updateClose));
  };

  return (
    <>
      <main className={`sidebarMain ${isDarkMode ? 'dark' : ''}`}>
        <SideBar
          toggleCloseSidebar={toggleCloseSidebar}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          isClose={isClose}
        />
        <div className="admin-content">
          <Header toggleCloseSidebar={toggleCloseSidebar} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <div className="admin-wrapper">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
