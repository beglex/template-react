import {Header, InputTask, TaskList} from '@root/components';
import {TaskProvider} from '@root/providers';

export function TaskContainer() {
    return (
        <>
            <Header text="Task List" />
            <TaskProvider>
                <InputTask />
                <TaskList />
            </TaskProvider>
        </>
    );
}
