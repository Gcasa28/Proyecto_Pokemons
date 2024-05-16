import { styles } from "../utils"
import { NavLink } from "react-router-dom"

export default function Card (props) {

    return (
        <div style={styles.container}>
            <div style={styles.body}>
                <div style={styles.card} id={props.id}>
                        <NavLink to={`/detail/${props.name}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <div style={styles.cardContent}>
                                <h2>{props.name}</h2>
                                <img src={props.image} alt={props.name} />
                                <h2>{props.type}</h2>
                            </div>
                        </NavLink>    
                </div>
            </div>
        </div>
    )
}