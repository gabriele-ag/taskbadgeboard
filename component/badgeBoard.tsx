'use client'
import styles from "./CSS/badgeBoard.module.css"

type BoardBox = {
    id: number,
    name: string,
    description: string,
    icon: string,
    unlocked: boolean
}

export default function BadgeBoard({id, name, description, icon, unlocked}: BoardBox) {
    return (
        <div className={`${styles.badgeCard} ${unlocked ? styles.unlocked : styles.locked}`}>

            <div className={styles.icon}>{icon}</div>

            <div className={styles.content}>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.description}>{description}</p>
            </div>

        </div>
    )
}