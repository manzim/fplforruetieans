import React, { useState } from 'react'

import team from '../resources/screenshots/team.PNG'
// import NavBar from './NavBar'

import { Dialog, Classes, AnchorButton, Intent } from '@blueprintjs/core'


function Suggestions() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <article className="pa5">
                <div

                    role="img"
                    aria-label="fatasy premier league teams"
                    className=" aspect-ratio--4x6 mw5"
                >
                    <img
                        src={team}
                        alt="suggestion team"
                        className=""
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <Dialog
                        className="mw7"
                        icon="info-sign"
                        isOpen={isOpen}
                        onClose={() => setIsOpen(!isOpen)}
                        title="What's special about this team?"
                    >
                        <div className="w-90-l w-90-m w-90 center">
                            <img
                                src={team}
                                alt="suggestion team"
                                className=""
                            />
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

            </article>
        </div>
    )
}

export default Suggestions
