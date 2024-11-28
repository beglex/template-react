import './TaskList.css';

import {TaskItem} from '@root/components/TaskItem';
import {useTasks} from '@root/providers';

export function TaskList() {
    const tasks = useTasks();

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <li key={task.id}>
                    <TaskItem task={task} />
                </li>
            ))}
        </ul>
    );
}
