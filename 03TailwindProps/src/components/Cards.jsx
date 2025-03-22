import React from "react";

function Card({username, h2Text="visit me"}){
    console.log(username)
    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.unsplash.com/photo-1731328667980-9ea08c5edc07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{h2Text}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}

export default Card