import React from "react"
import "./people.css"



export default function People(){


    return(
        <div className="Ligne3">
            <div className="Age">
                <span className="AgeTitle">Âge utilisateurs</span>

                <div className="PourcentAge">
                <div className="CatAge13">13-17 ans 8.9% </div>
                <div className="CatAge18">18-24 ans 30.2%</div>
                <div className="CatAge25">25-34 ans 31.7%</div>
                <div className="CatAge35">35-44 ans 15.8%</div>
                <div className="CatAge45">45-54 ans 7.8%</div>
                <div className="CatAge55">55-64 ans 3.7%</div>
                <div className="CatAge65">+65   ans 2.1%</div>
                </div>
            </div>

            <div className="sexe">
                <div className="sexeTitle">Proportion genre</div>
                <div className="sexePourcent">
                    <div className="PourcentHomme"> Hommes 42.4%</div>
                    <div className="PourcentFemme">Femmes 54.9%</div>
                    <div className="PourcentAutres">Autres 2.7%</div>
                </div>
            </div>
        </div>
    )
}