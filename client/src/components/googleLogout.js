import React from 'react'
import { GoogleLogout } from "react-google-login";
import auth from '../utils/auth'

const clientId = "1004159162833-2avgpkanfd1tfvsc9n2dit03l5qrpd6a.apps.googleusercontent.com"


function GoogleLogoutButton() {

    const onSuccess = () => {
      auth.logout()
        console.log("Log out success")
    }

  return (
    <div id="googleSignOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout with Google"}
        onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

export default GoogleLogoutButton
