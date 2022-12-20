import React from "react"
import Followers from "../components/followers/Followers"
import "./home.css"
import Chart from "../components/chart/Chart"
import People from "../components/people/People"
import Localisation from "../components/localisation/Localisation"




export default function Home() {
    return (


        <div className="home">
                <Followers/>
                <Chart/>
                <People/>
                <Localisation/>
        </div>
    )

}