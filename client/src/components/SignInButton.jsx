import React, { useContext } from 'react'
import { Context } from '../pages/HomePage'

function SignInButton() {

    const [signIn, setSignedIn] = useContext(Context);

    function handleClick() {
        setSignedIn(!signIn);
    }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {signIn ? "Sign Out" : "Sign In"}
      </button>
    </div>
  )
}

export default SignInButton
