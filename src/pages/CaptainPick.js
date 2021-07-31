import React from 'react'

import bruno from '../resources/players/bruno.jpg';
import salah from '../resources/players/salah.jpg';
// import bruno from '../resources/players/bruno.jpg';
// import bruno from '../resources/players/bruno.jpg';
// import bruno from '../resources/players/bruno.jpg';
// import bruno from '../resources/players/bruno.jpg';
// import bruno from '../resources/players/bruno.jpg';
// import bruno from '../resources/players/bruno.jpg';

function CaptainPick() {

    // const cardNumber = [ 1, 2, 3]

    const captainDetails = [
        {
            choice1: "salah",
            choice2: "mane",
            choice3: "bruno",
            gambles: "Taa, Robertson, Cavani, Sancho",
            choiceOf: "Official Fantasy Football Scout",
            image: bruno
        },
        {
            choice1: "FFScout UK",
            choice2: "mane",
            choice3: "bruno",
            gambles: "Taa, Robertson, Cavani, Sancho",
            choiceOf: "Official Fantasy Football Scout",
            image: salah
        },
        {
            choice1: "salah",
            choice2: "mane",
            choice3: "bruno",
            gambles: "Taa, Robertson, Cavani, Sancho",
            choiceOf: "Official Fantasy Football Scout",
            image: bruno
        },
    ]

    return (
        <div>
            <div class="vh-100 dt w-100 bg-white-40">
                <div class="dtc v-mid tc white ph3 ph4-l">
                    <h2 className=".bp3-monospace-text fw7 mb3 b red ">Game week 1 captain choice</h2>
                    <div class="bp3-card bg-red bp3-elevation-4 w-100 flex-m flex-l items-center">
                        {captainDetails.map((captain, id) =>
                            <div key={id} class="mw5 center w-third-l w-third-m flex-l flex-m black br3 pa2 pa3-l pa3-m mv3 ba ">
                                <div class="tc ">
                                    <img
                                        src={captain.image}
                                        class="br-100 h4 w4 dib ba b--black-05 pa2"
                                        alt={captain.choice1}
                                    />
                                    <h1 class="f5 tl "> Safe pick: <span className="fw4 i">{captain.choice1}</span>  </h1>
                                    <h1 class="f5 tl "> 2nd Choice: <span className="fw4 i">{captain.choice2}</span> </h1>
                                    <h1 class="f5 tl "> 3rd Choice: <span className="fw4 i">{captain.choice3}</span> </h1>
                                    <h1 class="f5 tl "> Gamble pick: <span className="fw4 i">{captain.gambles}</span> </h1>
                                    <h1 class="f5 tl "> Captain Choose by: <span className="fw4 i">{captain.choiceOf}</span> </h1>
                                </div>
                            </div>
                            
                        )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaptainPick
