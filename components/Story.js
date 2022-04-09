import React from 'react'

function Story({ img, username }) {
  return (
    <div>
      <img
        className="h-14 w-14 cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition-all duration-200 ease-out hover:scale-110"
        src={img}
        alt=""
      />
      <p className="w-14 truncate text-center text-sm">{username}</p>
    </div>
  )
}

export default Story
