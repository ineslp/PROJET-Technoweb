import "./chart.css"
import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart(){

    const data = [
        {
          name: '2013',
          "Nombre d'abonnés": 90,
          number: 90,
        },
        {
          name: '2014',
          "Nombre d'abonnés": 100,
          number: 100,
        },
        {
          name: '2015',
          "Nombre d'abonnés": 130,
          number: 130,
        },
        {
          name: '2016',
          "Nombre d'abonnés": 150,
          number: 150,
        },
        {
          name: '2017',
          "Nombre d'abonnés": 200,
          number: 200,
        },
        {
          name: '2018',
          "Nombre d'abonnés": 300,
          number: 300,
        },
        {
          name: '2019',
          "Nombre d'abonnés": 400,
          number: 400,
        },
        {
            name: '2020',
            "Nombre d'abonnés": 500,
            number:500,
        },
        {
            name: '2021',
            "Nombre d'abonnés": 600,
            number: 600,
        },
        {
            name: '2022',
            "Nombre d'abonnés": 700,
            number: 700,
        },
      ];


    return (
        <div className="chart">
            <div className="chartTitle">Nombre d'utilisateurs</div>
            <span className="chartSubTitle">(en millions)</span>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#000000"/>
                    <YAxis dataKey="number" stroke="#000000"/>
                    <Line type="monotone" dataKey="Nombre d'abonnés" stroke="#c932e1"/>
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>  
        </div>
    )
}