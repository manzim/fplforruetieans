import React from 'react'
import { Button } from '@blueprintjs/core'
// import { useHistory } from 'react-router-dom'
import NavBar from './NavBar'

function LandingScreen() {
    // let history = useHistory()
    return (
        <div>
            <NavBar />
            <article id="landingscreen" class="_landingscreen_ vh-100 dt w-100"> 
                <div class="dtc v-mid tc white ph3 ph4-l">
                    <Button 
                        className="" 
                        text='Game On' 
                        rightIcon="arrow-down" 
                        icon="globe" 
                        intent="success" 
                        large 
                        onClick={ () => window.scrollTo('')}
                    />
                </div>
            </article>
        </div>
    )
}

export default LandingScreen
