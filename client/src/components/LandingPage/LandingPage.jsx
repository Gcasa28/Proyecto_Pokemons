import React from "react"
import { styles } from "./LandingPage.js"

function LandingPage(props) {

    return (
        <div style={styles.fondoPantalla}>
            <div style={styles.stylesLandingPage}>
                <button style={styles.buttomLandingPage} onClick={props.goHome}>
                    Bienvenidos al mundo pokemon
                </button>
            </div>
        </div>
    )
}

export default LandingPage