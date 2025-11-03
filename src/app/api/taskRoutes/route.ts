import { NextResponse } from "next/server";
import taskList from "../../../../data/taskList.json"
import badgeList from "../../../../data/badgeList.json"
import { Task } from "./model/task";
import { Badge } from "./model/task";

export async function GET() {
    const allTasks: Task[] = taskList
    const allBadges: Badge[] = badgeList;
    return NextResponse.json({
        allTasks,
        allBadges,
    });
}
