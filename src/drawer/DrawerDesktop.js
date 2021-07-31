import React, { useState } from 'react'
import { Button } from '@blueprintjs/core'
import { useHistory } from 'react-router-dom'

import { MenuItem, Menu, MenuDivider } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';

import '../externalcss/Externalcss.css'

function DrawerDesktop() {

    const [isOpen, setIsOpen] = useState(false)

    let history = useHistory();
    return (
        <div>
            <div className="flex justify-end items-center">
                <Button className="-btn_ " text='Templates' minimal icon="media" onClick={() => history.push('/templates')} />
                <span className="bp3-navbar-divider"></span>
                <Button className="-btn_ " text='Suggestions' minimal icon="lightbulb" onClick={() => history.push('/suggestions')} />
                <span className="bp3-navbar-divider"></span>
                <Button className="-btn_ " text='Captain' minimal icon="new-person" onClick={() => history.push('./captain')} />
                <span className="bp3-navbar-divider"></span>
                <Popover2
                    popoverClassName=""
                    captureDismiss={true}
                    enforceFocus={false}
                    isOpen={isOpen}
                    canEscapeKeyClose={true}
                    content={
                        <Menu>
                            <MenuItem icon="calendar" text="Rotation Plan"
                                onClick={() => { history.push('#'); setIsOpen(!isOpen) }} />
                            <MenuDivider />

                            <MenuItem icon="grouped-bar-chart" text="Excel Sheets"
                                onClick={() => {
                                    history.push('#'); setIsOpen(!isOpen)
                                }}
                            />
                            <MenuDivider />

                            <MenuItem icon="dollar" text="League Code BD"
                                onClick={() => { history.push('./leaguecodes'); setIsOpen(!isOpen) }} />
                            <MenuDivider />

                            <MenuItem icon="cross" text="Close"
                                onClick={() => { setIsOpen(!isOpen) }} />
                            <MenuDivider />
                        </Menu>
                    }
                >
                    <Button intent="none" icon="time" text="Coming Soon..." minimal onClick={() => setIsOpen(!isOpen)} />
                </Popover2>
                <span className="bp3-navbar-divider"></span>
            </div>
        </div>
    )
}

export default DrawerDesktop
