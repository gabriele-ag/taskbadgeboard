'use client';

import GoalsBoard from "../../../component/goalsBoard"
import styles from "./dashboard.module.css"
import useTaskList from "../../../component/useTaskList"

export default function Dashboard() {

    const {task} = useTaskList()


    return (
        <section>

            <h1>BadgeBoard</h1>

            <div className={styles.boxGoalsBoard}>
                {task.map((curTask) => (
                <GoalsBoard
                title={curTask.title}
                description={curTask.description}
                />
                ))}
            </div>

        </section>
    )
}