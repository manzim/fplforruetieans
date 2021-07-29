import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Drawer } from '@blueprintjs/core';

import myLogo from '../resources/logoBanner/mylogo.svg'

export default function DrawerMobile() {

    let history = useHistory();
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="drawer_button bn">
                <Button
                    icon="menu"
                    className="gray"
                    onClick={() => setOpen(true)}
                    active={false}
                    minimal={true}
                    fill={true}
                    intent="none"
                    color="#3b3b3b"
                />

                <Drawer
                    className="flex flex-column bg-near-white"
                    isOpen={open}
                    size={"260px"}
                    style={{ backgroundColor: '#EEEEEE', zIndex: 999 }
                    }
                    vertical={false}
                    canOutsideClickClose={true}
                    onClose={() => setOpen(false)}
                    position={"left"}
                    hasBackdrop={true}
                >
                    <div className="logo_img tc center mb3 mt5"
                    // style={{ opacity: 1 }}
                    >
                        <img
                            className="tc center"
                            style={{
                                height: "inherit",
                                width: "220px",
                                opacity: 1
                            }
                            }
                            src={myLogo}
                            alt="My Logo"
                            onClick={() => { history.push("/"); setOpen(false) }}
                        />
                    </div>

                    <div className="fl ">
                        <div className="pa3">
                            <Button className="" text='Templates' minimal icon="media" />
                        </div>
                        <div className="pa3">
                            <Button className="" text='Suggestions' minimal icon="lightbulb" />
                        </div>
                        <div className="pa3">
                            <Button className="" text='Captain' minimal icon="new-person" />
                        </div>
                        <div className="pa3">
                            <Button className="" text='Coming Soon...' minimal icon="time" />
                        </div>
                    </div>

                </Drawer>
            </div>
        </div>
    )
}
