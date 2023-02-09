import React from 'react'
import "./Post.css"
import { CleaningServices, MoreVert } from '@mui/icons-material'
import { Users } from '../../DummuDta'
function Post({post}) {
   
  
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} className="postProfileImg" alt="" />
                        <span className="postUserName">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                        <span className="postDate">{post.date} day ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>  
                </div>
                <div className="postCenrte" >
                <span className="postText"> {post?.desc}</span>
                    <img src={post.photo} className="postimg" alt="" />
                    
                </div>
                <div className="postButton">
                    <div className='postButtonLeft'>
                        <img className="likeIcon"  src="/Assets/person/10.png" alt="" />
                        <img  className="likeIcon" src="/Assets/person/9.jpg " alt="" />
                        <span className='postLikeCounter'>{post.like} likes</span>
                    </div>
                    <div className='postButtonRight'>
                        <span className='postCommentText'>{post.comment}comments </span>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Post
