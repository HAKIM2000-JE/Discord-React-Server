import React from 'react'
import "./chat.css"

import NotificantionIcon from  "@material-ui/icons/Notifications"

import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded"

import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded"
import SearchRoundedIcon from "@material-ui/icons/SearchRounded"

import HelpRoundedIcon from "@material-ui/icons/HelpRounded"
import SendRoundedIcon from "@material-ui/icons/SendRounded"


function ChatHeader() {
    return (
        <div className="chatHeader">
            
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">

                    </span>
                    Test Channel Name
                </h3>
            </div>
            

            <div className="chatHeader__right">
                <NotificantionIcon/>
                <EditLocationRoundedIcon/>
                <PeopleAltRoundedIcon/>

                 <div className="chatHeader__search">
                   <input type="text" placeholder="search" />
                   <SearchRoundedIcon/>
                 </div>


                 <SendRoundedIcon/>
                 <HelpRoundedIcon/>
            </div>
        </div>
    )
}

export default ChatHeader
