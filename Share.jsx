import "./Share.css";
import PermMideaIcon from '@mui/icons-material/PermMedia';
import RoomIcon from '@mui/icons-material/Room';
import LabelIcon from '@mui/icons-material/Label';
import { EmojiEmotions } from "@mui/icons-material";
import AltRouteIcon from '@mui/icons-material/AltRoute';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PanoramaIcon from '@mui/icons-material/Panorama';
function Share() {
  return (
    <div className="share">
<div className="shareWapper">
    <div className="shareTop">
        <img src="/Assets/person/5.jpg" alt=""className="shareProfileImg" />
   <input type="text" placeholder="whats in ur maind" className="shareInput" />
    </div>
    <hr className="shareHr"/>
    <div className="shareBottom">
        <div className="shareOptions">
            <div className="shareOption">
                <PermMideaIcon htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionText">feelings</span>
            </div>
            
            <div className="shareOption">
                <LabelIcon htmlColor="blue" className="shareIcon"/>
                <span className="shareOptionText">tags</span>
            </div>
            <div className="shareOption">
                <PanoramaIcon htmlColor="green" className="shareIcon"/>
                <span className="shareOptionText">photo</span>
            </div>   
            
             
            <div className="shareOption">
                <AltRouteIcon htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionText">Address</span>
            </div> 
             <div className="shareOption">
                <GroupAddIcon htmlColor="blue" className="shareIcon"/>
                <span className="shareOptionText">Imeges</span>
            </div> 
            <div className="shareOption">
                <RoomIcon htmlColor="green" className="shareIcon"/>
                <span className="shareOptionText">Map</span>
            </div> 
        </div>
        
        <button className="shareOptionbutton">share</button>
    </div>
</div>
         
    </div>
  )
}

export default Share