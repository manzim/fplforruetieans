import React, { useState } from 'react'

import team from '../resources/screenshots/team.PNG'
import { Button } from '@blueprintjs/core'

import { Dialog, Classes, AnchorButton, Intent } from '@blueprintjs/core'

const suggestionPanel = [

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    }
    ,

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: 'first draft of ben crellin',
        teamOf: "ben crellin"
    }
    ,

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },


    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },

    {
        imgSrc: team,
        speciality: 'bruNO team',
        detailsSpeciality: '3-5-2 formation',
        teamOf: "my team"
    },
]

function Suggestions() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div id="templates" className="vh-100 dt w-100 bg-white-20">
                <div class="dtc v-mid tc white ph3 ph4-l">
                    <div class="cf w-100 pa5">
                        {suggestionPanel.map((item, id) =>
                            <div class="fl w-100 w-50-m  w-25-l pa2">
                                <div class="aspect-ratio aspect-ratio--1x1">
                                    <img
                                        src={item.imgSrc}
                                        alt={item.teamOf}
                                        class="db bg-center cover aspect-ratio--object" />
                                </div>
                                <div href="#0" class="ph2 ph0-l pb3 link db">
                                    <Button text="Details" intent="success" minimal large onClick={() => setIsOpen(!isOpen)} />
                                    <Dialog
                                        className="bg-red"
                                        icon="info-sign"
                                        isOpen={isOpen}
                                        onClose={() => setIsOpen(!isOpen)}
                                        title="What's special about this team?"
                                    >
                                        <div className={Classes.DIALOG_BODY}>
                                            <p>
                                                <strong>
                                                    {item.detailsSpeciality}
                                                </strong>
                                            </p>
                                            <div className="mw8">
                                                <img
                                                    src={item.imgSrc}
                                                    alt={item.teamOf}
                                                />
                                            </div>
                                        </div>
                                        <div className={Classes.DIALOG_FOOTER}>
                                            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                                                <AnchorButton
                                                    intent={Intent.DANGER}
                                                    onClick={() => setIsOpen(!isOpen)}
                                                >
                                                    close
                                                </AnchorButton>
                                            </div>
                                        </div>
                                    </Dialog>
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

export default Suggestions
