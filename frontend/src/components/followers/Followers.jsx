import React from "react"
import "./followers.css"

export default function Followers(){
    return(
        <div className="Widget1">
            <div className="followersInsta">
                <span className="widget1Title">Abonnés @instagram</span>
                <div className="Numberfollowers">
                <span className="widget1Number">580 mio</span>
                </div>
            </div>

            <div className="followersTopInsta">
                <span className="widget2Title">Comptes les plus suivis</span>
                <div className="NumberTopfollowers">
                <div className="widget2Name1">@cristiano   519mio</div>
                <div className="widget2Name2">@leomessi   403mio</div>
                <div className="widget2Name3">@kyliejenner   375mio</div>
                </div>
            </div>

        </div>
    )
}