import React from 'react'
import { Button } from '@blueprintjs/core'
import { useHistory } from 'react-router-dom'

function DrawerDesktop() {

    let history = useHistory();
    return (
        <div>
            <div className="flex justify-end items-center">
                <Button className="" text='Templates' minimal icon="media" onClick={ () => history.push('/templates') } />
                <span className="bp3-navbar-divider"></span>
                <Button className="" text='Suggestions' minimal icon="lightbulb" onClick={ () => history.push('/suggestions') } />
                <span className="bp3-navbar-divider"></span>
                <Button className="" text='Captain' minimal icon="new-person" onClick={ () => history.push('./captain') } />
                <span className="bp3-navbar-divider"></span>
                <Button className="" text='Coming Soon...' minimal icon="time" onClick={ () => history.push('#') } />
                <span className="bp3-navbar-divider"></span>
            </div>
        </div>
    )
}

export default DrawerDesktop
