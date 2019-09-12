import React from 'react'
import baloonIcon from  './assets/'
import bellIcon from  './assets/'
import sidebarIcon from  './assets/'
import classes from './HeaderIcons.module.css'
const headerIcons = (props) => {
    return (
        <div>
            <img alt={'Chats'} src={baloonIcon}/>
            <img alt={'Notifications'} src={bellIcon}/>
            <img alt={'Open sidebar'} src={sidebarIcon}/>
        </div>
    )
};

export default headerIcons