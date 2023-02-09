import "./Feed.css"
import Share from "../Share/Share"
import Post from "../Post/Post"
import { Posts } from "../../DummuDta"
function Feed() {
  return (
    <div className="feed">

<div className="feedbarWrapper" >
<Share/>
{Posts.map(p=>(
  <Post key= {p.id} post={p}/>
))}

</div>



    </div>
  )
}

export default Feed