import React from 'react'
import { Comingsoon, Thirdprompt3, Whybox } from '../pages/Landing'

const Coming = () => {
  return (
    <Thirdprompt3 style={{paddingTop:"0px", marginTop:"0px"}}>
            <Whybox> <p>Recently viewed</p> </Whybox>
            <Comingsoon><p>Coming Soon</p></Comingsoon>
        </Thirdprompt3>
  )
}

export default Coming
