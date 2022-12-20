import React from 'react'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className= "topbarWrapper">
                <div className="topleft">
                    <img src="https://www.meilleure-innovation.com/wp-content/uploads/2022/04/logo-instagram.png" alt="" className="logo"/>
                </div>

                <div className="topright">
                    <div className="topbarIcons">
                    <span class="material-icons">settings</span>
                    <img src="https://www.lyon-photo.fr/wp-content/uploads/2020/01/photo-cv-lyon-recrutement.jpg" alt="" className="topAvatar" />
                    </div>
                </div>
            </div>
        </div>
    )
} 