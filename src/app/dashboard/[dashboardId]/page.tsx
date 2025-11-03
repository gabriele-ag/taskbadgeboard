import taskList from '../../../../data/taskList.json'
import { Task } from '@/app/api/taskRoutes/model/task';

import styles from './CSS/dashboardid.module.css'

import Link from 'next/link';

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

                <h1 className={styles.detailTitle}>// {task.title}</h1>

                <div className={styles.description}>
                <h3 className={styles.detailSubTitle}>Descrizione</h3>
                <p>{task.description}</p>
                </div>

                <div className={styles.detail}>
                <h3 className={styles.detailSubTitle}>Altri dettagli</h3>
                <p>{task.detail}</p>
                <ul className={styles.ulDetail}>
                    {(task.resources ?? []).map((url, index) =>(
                        <li className={styles.urlLink} key={index}>
                            <Link href={url}>{url}</Link>
                        </li>
                    ))}
                </ul>
                </div>

                <div className={styles.tips}>
                <h3 className={styles.detailSubTitle}>Consigli</h3>
                    <p>{task.tips}</p>
                </div>

                <Link className={styles.backButton} href={'/dashboard'}>Torna indietro</Link>
            </div>
        </section>
    );
}