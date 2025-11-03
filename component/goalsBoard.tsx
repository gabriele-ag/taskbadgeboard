'use client';
import styles from "./CSS/goalsBoard.module.css"

type GoalsBox = {
    title: string,
    completed: boolean,
    onToggle: () => void
}

export default function GoalsBoard({title, completed, onToggle}: GoalsBox) {
    return (
        <div className={styles.goalsBox}>
            <div className={`${styles.statusBox}`}>
                <button 
                onClick={completed? undefined : onToggle}
                className={`${styles.statusDot} ${completed ? styles.completed : styles.incomplete}`}
                disabled={completed}>
                </button>
            </div>
            <div>
                <h4 className={styles.goalTitle}>{title}</h4>
            </div>
        </div>
    )
}