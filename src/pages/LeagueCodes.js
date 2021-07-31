import React, { useState } from 'react'

import { Button, Toaster, Position } from '@blueprintjs/core'

export const AppToaster = Toaster.create({
    position: Position.TOP,
    className: "mt5-ns mt5"
  });

function LeagueCodes() {

    const [copySuccess, setCopySuccess] = useState('');
    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    const leagueCodes = [
        {
            leagueName: "jersey freak BD",
            leagueCodes: "ascdef",
            prize: "official player version jersey"
        },
        {
            leagueName: "cadets sportware",
            leagueCodes: "ascdef",
            prize: "official player version jersey"
        },
        {
            leagueName: "indigo retro",
            leagueCodes: "rafef",
            prize: "official player version jersey"
        },
        {
            leagueName: "jersey freak BD",
            leagueCodes: "ascdef",
            prize: "official player version jersey"
        },
    ]

    // function CopyToClipboard(containerid) {
    //     if (document.selection) {
    //         const range = document.body.createTextRange();
    //         range.moveToElementText(document.getElementById(containerid));
    //         range.select().createTextRange();
    //         document.execCommand("copy");
    //     } else if (window.getSelection) {
    //         const range = document.createRange();
    //         range.selectNode(document.getElementById(containerid));
    //         window.getSelection().addRange(range);
    //         document.execCommand("copy");
    //         alert("Text has been copied, now paste in the text-area")
    //     }
    // }



    return (
        <div>
            <div className="pa4">
                <div className="overflow-auto">
                    <table class="f5 w-100 mw8 center mt5" cellspacing="0">
                        <tbody>
                            {/* <thead>
                                <tr className="stripe-dark">
                                    <th className="fw3 tl pa3 ">Page Name</th>
                                        <th className="fw3 tl pa3 ">Prize </th>
                                    <th className="fw3 tl pa3 ">League Code</th>
                                    <th className="fw3 tl pa3 ">Copy</th>
                                </tr>
                            </thead> */}
                            {leagueCodes.map((item, index) => {
                                return <tr className='stripe-dark ' key={index}>
                                    <td className="pa3"> {item.leagueName} </td>
                                    <td className="pa3 "> {item.prize} </td>
                                    <td className="pa3 db-l db-m dn"> {item.leagueCodes} </td>                                    
                                    <td className="pa3">
                                        <Button
                                            text="copy league code"
                                            intent="success"
                                            minimal
                                            className="b"
                                            style={{ outline: "none" }}
                                            onClick={() => {
                                                copyToClipBoard(item.leagueCodes);
                                                AppToaster.show({
                                                    message: `League code copied to your clipboard`,
                                                    icon: "cross",
                                                    intent: "success",
                                                    timeout: 2000
                                                });
                                            }}
                                        />
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default LeagueCodes
