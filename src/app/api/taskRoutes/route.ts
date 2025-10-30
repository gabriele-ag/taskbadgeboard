import { NextResponse } from "next/server";
import taskList from "../../../../data/taskList.json"
import { Task } from "./model/task";

export async function GET() {
    const tasks: Task[] = taskList
    return NextResponse.json(tasks)
}
