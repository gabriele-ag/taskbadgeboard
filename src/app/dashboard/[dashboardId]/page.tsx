import taskList from '../../../../data/taskList.json'
import { Task } from '@/app/api/taskRoutes/model/task';

import styles from './CSS/dashboardid.module.css'

export default async function DashboardDetail({
    params,
}: {
    params: Promise<{dashboardId: string}>;
}) {
    const {dashboardId} = await params
    const task: Task | undefined = taskList.find((curTask) => curTask.id === parseInt(dashboardId))

    if (!task) return <div>Task non trovata</div>;

    return (
        <section className={styles.sectionDetail}>

            <div className={`${styles.boxDetail} ${styles.container}`}>

                <h1>{task.title}</h1>

                <div className={styles.description}>
                <p>{task.description}</p>
                </div>

                <div className={styles.detail}>
                <p>{task.detail}</p>
                <p>{task.resources}</p>
                </div>

                <div className={styles.tips}>
                    <p>{task.tips}</p>
                </div>
            </div>
        </section>
    );
}