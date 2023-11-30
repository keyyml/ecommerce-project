import { useHistory } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { RiLogoutBoxRLine } from "react-icons/ri";

function Logout(props) {

  const history = useHistory()

  const handleLogout = async () => {
    try {
      await axios.get('/logout')
      console.log("successful")
      props.getUser()
      history.push("/")
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return (
    <>
      <button className="text-pinky text-2xl hover:text-zinc-700" onClick={handleLogout}><RiLogoutBoxRLine /></button>
    </>
  )

}

export default Logout;