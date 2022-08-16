import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from '../users/usersSlice'


const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)

    return <span>by {author ? <Link to={`/user/${userId}`}>{author.name}</Link> : "unknown author"}</span>
}

export default PostAuthor

/* userId is being passed from the parent sub-component, PostList.js
we destructurize the component and get the userId*/