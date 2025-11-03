'use client';

import { useEffect, useState, useCallback } from "react"
import { Task, Badge } from "../src/app/api/taskRoutes/model/task"

type TaskResponse = {
    allTasks: Task[];
    allBadges: Badge[];
}

export default function useTaskList() {
    const [task, setTask] = useState<Task[]>([])
    const [badge, setBadge] = useState<Badge[]>([])
    const [error, setError] = useState<string | null>(null)


    const getTask = useCallback(async(): Promise<TaskResponse> => {
        try {
            const response = await fetch(`/api/taskRoutes`)
            if (!response.ok) {
                throw new Error (`Errore nella chiamata: ${response.status}`)
            }
            const data = await response.json() as TaskResponse
            return data

        } catch(error) {
            throw new Error(`Errore nel recupero dei dati`)
        }
        
    }, [])

    useEffect(() => {
        getTask()
        .then((data) => {
            setTask(data.allTasks)
            setBadge(data.allBadges)
        })
        .catch((err) => setError((err as Error).message))
    }, [getTask])

    return {task, badge, error, getTask, setTask, setBadge}
}