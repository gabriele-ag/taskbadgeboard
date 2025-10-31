'use client';
import styles from "./CSS/goalsBoard.module.css"

type GoalsBox = {
    title: string,
    description: string,
    completed: boolean
}

export default function GoalsBoard({title, description, completed}: GoalsBox) {
    return (
        <div>
            <div className={styles.statusBox}>
                <span className={`${styles.statusCompleted} ${completed ? 'V' : 'X'}`}></span>
            </div>
            <div>
                <h4 className={styles.goalTitle}>{title}</h4>
                <p className={styles.goalDescription}>{description}</p>
            </div>
        </div>
    )
}