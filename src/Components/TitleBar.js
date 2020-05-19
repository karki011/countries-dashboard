import React from "react"
import "./TitleBar.css"
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

export default function TitleBar(props){
    return(
        <div className="title-bar">
            <span className="page-title">
                Where in the world?
            </span>
            <span className="color-mode-toggle">
                <Brightness2OutlinedIcon fontSize="small" /> Dark Mode Not Yet Implemented
            </span>
        </div>
    )
}