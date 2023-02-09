import "./Rightbar.css"
import {Users} from "../../DummuDta"
import Online from "../Online/Online"
function Rightbar() {
  return (
    <div className="rightbar">
<div className="rightbarWrapper">
  <div className="birthdayContainer">
  <img src="/Assets/person/R.jpg" alt="" className="birthdayImg" />
    <span className="birthdayText"><b>pola foster</b>  and <b>3 others friends</b> have a brithdy today.</span>
  </div>
  <img src="/Assets/person/F.jpg" className="rightbarAdd" alt="" />
<h4 className="rightbarTitle"> online Friends</h4>
<ul className="rightbarFriendList">
{Users.map(u=>(
<Online key={u.id} user={u}/>))}
</ul>
</div>
    </div>
  )
}
export default Rightbar