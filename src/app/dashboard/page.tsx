'use client';

import GoalsBoard from "../../../component/goalsBoard"
import styles from "./dashboard.module.css"
import useTaskList from "../../../component/useTaskList"

export default function Dashboard() {

    const {task} = useTaskList()


    return (
        <section>

            <h1>BadgeBoard</h1>
            {task.map((curTask) => (
                <div key={curTask.id}>
                    <p>{curTask.title}</p>
                </div>
            ))}

            <GoalsBoard/>

        </section>
    )
}