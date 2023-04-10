import { Auth } from "aws-amplify";
import { useEffect, useState } from "react"
import { RiLogoutBoxLine } from "react-icons/ri"

import "./ProfileButton.css"

export const ProfileButton = () => {
  const [user, setUser] = useState<any>();
  const [isShow, setIsShow] = useState<boolean>(false);
  const getUserProfile = async () => {
    const user = await Auth.currentAuthenticatedUser()
    setUser(user?.attributes);
  }
  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    Auth.signOut()
  }
  useEffect(() => {
    getUserProfile()
  }, [])

  const handleCloseShow = () => {
    setTimeout(() => setIsShow(false), 300)
  }
  const handleOpenShow = () => {
    setIsShow(true)
  }
  console.log(user)
  return <div className="profile-container">
    <button className="profile-name" onBlur={handleCloseShow} onClick={handleOpenShow}>{user?.email?.[0]}</button>
    {isShow && <button onClick={handleLogout} className="profile-logout"><RiLogoutBoxLine size={18} /></button>}
  </div>
}