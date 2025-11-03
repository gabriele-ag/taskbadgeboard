'use client';

import GoalsBoard from "../../../component/goalsBoard"
import BadgeBoard from "../../../component/badgeBoard";

import styles from "./dashboard.module.css"
import useTaskList from "../../../component/useTaskList"


export default function Dashboard() {

    const {task, setTask, badge, setBadge} = useTaskList()

    const handleToggle = (id: number) => {
        const updatedTasks = task.map((curTask) =>
            curTask.id === id ? { ...curTask, completed: !curTask.completed } : curTask
        )
        setTask(updatedTasks)
        const completedCount = updatedTasks.filter((curTask) => curTask.completed).length

        const updatedBadges = badge.map((curBadge) => {
            if(curBadge.id === 1 && completedCount >= 1) return {...curBadge, unlocked: true}
            if(curBadge.id === 2 && completedCount >= 3) return {...curBadge, unlocked: true}
            if(curBadge.id === 6 && completedCount >= 5) return {...curBadge, unlocked: true}
            return curBadge
        })

        setBadge(updatedBadges)
    }



    return (
        <section className={styles.sectionTaskBadge}>


            {/* Goals */}
            <div className={styles.container}>
                    <div className={styles.boxTaskBadge}>
                        <div className={styles.boxGoalsBoard}>
                            
                            {task.map((curTask) => (

                            <GoalsBoard
                            key={curTask.id}
                            title={curTask.title}
                            completed={curTask.completed}
                            onToggle={() => handleToggle(curTask.id)}
                            />

                            ))}
                        </div>
                        
                        {/* Badge */}
                        <div className={styles.boxGoalsBoard}>
                            {badge.map((curBadge) => (
                                <BadgeBoard
                                key={curBadge.id}
                                id={curBadge.id}
                                name={curBadge.name}
                                description={curBadge.description}
                                icon={curBadge.icon}
                                unlocked={curBadge.unlocked}/>
                            ))}
                        </div>
                    </div>
            </div>


        </section>
    )
}