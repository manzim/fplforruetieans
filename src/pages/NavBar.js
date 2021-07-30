import React from 'react'
import { useHistory } from 'react-router-dom'
import DrawerDesktop from '../drawer/DrawerDesktop'
import DrawerMobile from '../drawer/DrawerMobile'

import myLogo from '../resources/logoBanner/mylogo.png'

function NavBar() {
    let history = useHistory()
    return (
        <div>
            {/* for desktop */}
            <div className="_desktopmenu_ fixed w-100">
                <nav className="_navBarFixed_ fixed fixedToTop bp3-navbar bp3-dark .modifier flex items-center">
                    <div className="di-l di-m di w-90 w-25-l w-20-m"> 
                        <img
                            src={myLogo}
                            className="mw3-l mw3-m mw4"
                            alt="my logo"
                            onClick={ () => history.push('/')}
                        />
                    </div>
                    <div className="di-l di-m dn w-10 w-75-l w-20-m fr"> <DrawerDesktop /> </div>
                    <div className="dn-l dn-m di w-10 w-0-l w-0-m"> <DrawerMobile /> </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
