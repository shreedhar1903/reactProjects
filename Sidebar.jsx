import "./Sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import ChatIcon from '@mui/icons-material/Chat';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LyricsIcon from '@mui/icons-material/Lyrics';
function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">

    <ul  className="sidebarList" >
      <li className="sidebarListItem">
     <RssFeedIcon className="sidebarIcon"/>
     <span className="sidebarListItemText">feed</span>
      </li>
      <li className="sidebarListItem">
     <VoiceChatIcon className="sidebarIcon"/>
     <span className="sidebarListItemText">VoiceChat</span>
      </li>
      <li className="sidebarListItem">
     <VideoChatIcon className="sidebarIcon"/>
     <span className="sidebarListItemText">VideoChat</span>
      </li>
      <li className="sidebarListItem">
     <ChatIcon  className="sidebarIcon"/>
     <span className="sidebarListItemText">Chat </span>
      </li>
      <li className="sidebarListItem">
     <FeedbackIcon className="sidebarIcon"/>
     <span className="sidebarListItemText">Feedback</span>
      </li>
      <li className="sidebarListItem">
     <LyricsIcon className="sidebarIcon"/>
     <span className="sidebarListItemText">Lyrics</span>
      </li>
    </ul>
    <button className="sidebarButtom">show more</button>
    <hr className="sidebarHr" />
    <ul className="sidebarFriendList">
      <li className="sidebarFriend">
       <img src="/Assets/person/7.jpg" alt="" className="sidebarFriendImg"/>
       <span className="sidebarFriendName">vevekananda</span>
      </li>
      <li className="sidebarFriend">
       <img src="/Assets/person/green.jpg" alt="" className="sidebarFriendImg"/>
       <span className="sidebarFriendName">beutifull</span>
      </li>
      <li className="sidebarFriend">
       <img src="/Assets/person/1.jpg" alt="" className="sidebarFriendImg"/>
       <span className="sidebarFriendName">green</span>
      </li>
      <li className="sidebarFriend">
       <img src="/Assets/person/cricket.jpg" alt="" className="sidebarFriendImg"/>
       <span className="sidebarFriendName">sports</span>
      </li>
      <li className="sidebarFriend">
       <img src="/Assets/person/jhony.jpg" alt="" className="sidebarFriendImg"/>
       <span className="sidebarFriendName">Jhony berrstow</span>
      </li>
      <li className="sidebarFriend">
       <img src="/Assets/person/verat.jpg" alt="" className="sidebarFriendImg"/>
       <span className="sidebarFriendName">Virat kholi</span>
      </li>
      
      
     
      
      <li className="sidebarFriend">
       <img src="/Assets/person/SSS.jpg" alt="" className="sidebarFriendImg"/>
       <span className="sidebarFriendName"> kholi</span>
      </li>
      <li className="sidebarFriend">
       <img src="/Assets/person/F.jpg" alt="" className="sidebarFriendImg"/>
       <span className="sidebarFriendName"> kholi</span>
      </li>
     
    </ul>
    
    </div>
      </div>
  )
}

export default Sidebar
