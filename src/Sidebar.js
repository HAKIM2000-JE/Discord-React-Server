import React from 'react'
import "./sidebar.css"
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SidebarChannel from "./SidebarChannel" 
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

import {Avatar} from "@material-ui/core"

function Sidebar() {
    return (
        <div className="sidebar">
            
           
              <div className="sidebar__top">
                  <h3>Hakim Jebabra</h3>
             
                  <ExpandMoreIcon />
              </div>   

              <div className="sidebar__channels">
                 <div className="sidebar__channelsHeader">
                       <div className="sidebar__header">
                       <ExpandMoreIcon/>
                       <h4>Text channels</h4>
                       </div>

                       <AddIcon className="sidebar__addChannel" />
                 </div>
                <div className="sidebar__ChannelLists">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
              </div>

              <div className="sidebar__voice">
                     <SignalCellularAltIcon
                        className="sidebar__voiceicon"
                        fontsize="large"/>


                    <div className="sidebar__voiceinfo">
                       <h3>Voice conncted</h3>
                       <p>Stream</p>
                    </div>    


                    <div className="sidebar__voiceicons">
                        <HelpOutlineIcon/>
                        <CallIcon/>
                    </div>
              </div>

                 
                  <div className="sidebar__profile">
                <Avatar src="C:\Users\moham\Desktop\Me"/>

                     <div className="sidebar__profileInfo">
                       <h3>Hakim Drakboy</h3>
                       <p>#MyId</p>
                     </div>

                      <div className="sidebar__profileIcons">
                        <MicIcon/>
                        <HeadsetIcon/>
                        <SettingsIcon/>
                      </div>
                  </div>
              



            
        </div>
    )
}

export default Sidebar
