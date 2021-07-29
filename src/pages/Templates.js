import { Button, Dialog, Classes, AnchorButton, Intent } from '@blueprintjs/core'
import React, { useState } from 'react'

import landingbannerany from '../resources/logoBanner/landingbannerany.jpg'

function Templates() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div id="templates" className="vh-100 dt w-100 bg-white-20">
                <div class="dtc v-mid tc white ph3 ph4-l">
                    <div class="cf w-100 pa2">
                        <div class="fl w-100 w-50-m  w-25-ns pa2">
                            <div class="aspect-ratio aspect-ratio--1x1">
                                <img
                                    src={landingbannerany}
                                    alt="landing page banner"
                                    class="db bg-center cover aspect-ratio--object" />
                            </div>
                            <div href="#0" class="ph2 ph0-ns pb3 link db">
                                <h3 class="f5 f4-ns mb0 black-90">Speciality: salah-bruno-kane-TAA quadruple</h3>
                                <h3 class="f6 f5 fw4 mt2 black-60">team of ben crellin</h3>
                                <Button text="Details" intent="success" minimal large onClick={() => setIsOpen(!isOpen)} />
                                <Dialog
                                    className=""                                  
                                    icon="info-sign"
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(!isOpen)}
                                    title="What's special about this team?"
                                >
                                    <div className={Classes.DIALOG_BODY}>
                                        <p>
                                            <strong>
                                                Data integration is the seminal problem of the digital age. For over ten years, we’ve
                                                helped the world’s premier organizations rise to the challenge.
                                            </strong>
                                        </p>
                                    </div>
                                    <div className={Classes.DIALOG_FOOTER}>
                                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                                            <AnchorButton
                                                intent={Intent.DANGER}
                                                
                                                onClick={ () => setIsOpen(!isOpen)}
                                            >
                                                close
                                            </AnchorButton>
                                        </div>
                                    </div>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Templates
