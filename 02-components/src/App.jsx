import React from 'react'
import Card from './component/Card';
import Navbar from './component/Navbar' 
import UserProfile from './component/UserProfile';
const App = () => {
  return (
   <>
    <div>
      <Navbar />
       <Card />
       <UserProfile user = "Yash" age = {23} img = 'https://images.unsplash.com/photo-1758539412442-23b83300f0bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2028'/>
       <UserProfile user = "Ayush" age = {24} img = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=500&q=60' />
       </div>
   </>
  )
}
export default App;