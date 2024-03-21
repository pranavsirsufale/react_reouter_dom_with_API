import React, { useEffect, useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom';

function Github() {

    const userData = useLoaderData()
    console.log(userData);

    const { public_repos,avatar_url , login,html_url ,name,bio } = userData;


  return (
  <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' > Public Repository :  
    <span className={`hover:scale-105 transition-all duration-200`} >
        { public_repos } 
        </span>
        </div>
    
    <NavLink to={html_url} target='parent'>
    <img src={avatar_url} alt={`${login} img`} className={`hover:scale-105 transition-all duration-200`} />
       <h1 className='mt-4 text-4xl'> name : { name} </h1>
       <h1 className='mt-4 text-4xl'> Bio : { bio} </h1>
    </NavLink>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/pranavsirsufale');
    let dat = response.json()
    return dat
}