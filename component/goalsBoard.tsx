'use client';
import Link from "next/link";
import styles from "./CSS/goalsBoard.module.css"

type GoalsBox = {
    id: number,
    title: string,
    completed: boolean,
    onToggle: () => void
}

export default function GoalsBoard({id, title, completed, onToggle}: GoalsBox) {
    return (
        <div className={styles.goalsBox}>
            <div>
                <button 
                onClick={completed? undefined : onToggle}
                className={`${styles.statusDot} ${completed ? styles.completed : styles.incomplete}`}
                disabled={completed}>
                </button>
            </div>
            <div>
                <Link href={`/dashboard/${id}`} className={styles.goalTitle}>{title}</Link>
            </div>
        </div>
    )
}