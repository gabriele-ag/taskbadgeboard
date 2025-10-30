'use client';

import { useEffect, useState, useCallback } from "react"
import { Task } from "../src/app/api/taskRoutes/model/task"

export default function useTaskList() {
    const [task, setTask] = useState<Task[]>([])
    const [error, setError] = useState<string | null>(null)

    const getTask = useCallback(async <T,>(): Promise<T> => {
        try {
            const response = await fetch(`/api/taskRoutes`)
            if (!response.ok) {
                throw new Error (`Errore nella chiamata: ${response.status}`)
            }
            const data: T = await response.json()
            return data

        } catch(error) {
            throw new Error(`Errore nel recupero dei dati`)
        }
    }, [])

    useEffect(() => {
        getTask<Task[]>()
        .then((data) => setTask(data))
        .catch((err) => setError((err as Error).message))
    }, [getTask])

    return {task, error, getTask}
}