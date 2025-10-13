import React from 'react'

const UserProfile = (props) => {
  console.log(props.user, props.age, props.img);
  return (
    <>
    <div className='userContainer'>
    <div className='userProfile'>
        <img src={props.img} alt="profile" className='img' />
        <h3>{props.user}, {props.age}</h3>
        <p> Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Libero at ducimus repellat id possimus natus saepe ullam velit distinctio. Quae nihil aperiam dolorum dignissimos aspernatur eum debitis illum nulla pariatur?</p>
        <button className='button'>View Profile</button>
    </div>
    </div>
    </>
  )
}

export default UserProfile