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
        const totalGoals = updatedTasks.length
        const completedCount = updatedTasks.filter((curTask) => curTask.completed).length
        const completedGoalIds = updatedTasks.filter((curTask) => curTask.completed).map((curElem) => curElem.id)

        const updatedBadges = badge.map((curBadge) => {
            if (curBadge.id === 1 && totalGoals >= 1) return { ...curBadge, unlocked: true };
            if (curBadge.id === 2 && completedCount >= 3) return { ...curBadge, unlocked: true };
            if (curBadge.id === 3 && completedCount === totalGoals && totalGoals > 0) return { ...curBadge, unlocked: true };
            if (curBadge.id === 4 && completedGoalIds.includes(4)) return { ...curBadge, unlocked: true };
            if (curBadge.id === 5 && completedGoalIds.includes(5)) return { ...curBadge, unlocked: true };
            if (curBadge.id === 6 && completedCount >= 5) return { ...curBadge, unlocked: true };
            if (curBadge.id === 7 && completedGoalIds.includes(6)) return { ...curBadge, unlocked: true };
            if (curBadge.id === 8 && completedGoalIds.includes(9)) return { ...curBadge, unlocked: true };
            if (curBadge.id === 9 && completedGoalIds.includes(3)) return { ...curBadge, unlocked: true };
            if (curBadge.id === 10 && completedGoalIds.includes(8)) return { ...curBadge, unlocked: true };
            if (curBadge.id === 11 && completedGoalIds.includes(2)) return { ...curBadge, unlocked: true };
            if (curBadge.id === 12 && completedGoalIds.includes(5)) return { ...curBadge, unlocked: true };
            if (curBadge.id === 13 && completedGoalIds.includes(1)) return { ...curBadge, unlocked: true };
            return curBadge
        })

        setBadge(updatedBadges)
    }



    return (
        <section className={styles.sectionTaskBadge}>

            {task.length === 0 ? (
                <div className={styles.loadingBox}>
                    <p className={styles.loading}>Caricamento...</p>
                </div>
            ) : (
            <div className={styles.container}>

                    {/* Goals */}
                    
                    
                    <div className={styles.flexGoalsBoard}>
                        <div className={styles.boxGoalsBoard}>
                                                       
                            <h2 className={styles.mgBot30}>Task</h2>                           
                            {task.map((curTask) => (
                            <GoalsBoard
                            key={curTask.id}
                            id={curTask.id}
                            title={curTask.title}
                            completed={curTask.completed}
                            onToggle={() => handleToggle(curTask.id)}
                            />

                            ))}
                            <p className={styles.adviceOnTask}>* Clicca sulle task per saperne i dettagli</p>
                        </div>
                        
                        {/* Badge */}

                        <div className={styles.boxGoalsBoard}>
                            <h2 className={styles.mgBot30}>Achievement</h2>
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
            )}


        </section>
    )
}