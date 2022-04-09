import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import Post from './Post'
import { Snapshot } from 'recoil'

// const posts = [
//   {
//     id: '123',
//     username: 'ssssangha',
//     userImg: 'https://links.papareact.com/3ke',
//     img: 'https://links.papareact.com/3ke',
//     caption: 'This is DOPE!',
//   },
//   {
//     id: '123',
//     username: 'ssssangha',
//     userImg: 'https://links.papareact.com/3ke',
//     img: 'https://links.papareact.com/3ke',
//     caption: 'This is DOPE!',
//   },
// ]

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )

  console.log(posts)
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
