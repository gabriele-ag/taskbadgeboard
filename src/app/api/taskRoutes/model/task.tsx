export type Task = {
    id: number,
    title: string,
    description: string,
    completed: boolean,
    progress?: number
    detail?: string,
    objective?: string,
    resources?: string[]
    tips?: string
}

export type Badge = {
    id: number,
    name: string,
    description: string,
    icon: string,
    unlocked: boolean
}