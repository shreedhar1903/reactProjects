import './Topbar.css'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


import React from 'react'

function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'> MY APP</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <SearchIcon  className='searchIcon'/>
                    <input type="text" className='searchInput' placeholder='search friendes or video' />
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>home page</span>
                    <span className='topbarLink'>time lines</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarItem'>
                        <PersonIcon />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarItem'>
                        <ChatIcon />
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className='topbarItem'>
                        <NotificationsIcon />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <img src="/Assets/person/1.jpg" alt="" className='topbarImg' />
            </div>


        </div>
    )
}

export default Topbar