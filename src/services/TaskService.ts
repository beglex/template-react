import type {Task} from '@root/types';

import {defaultTasks} from '@root/constants';
import {sleep} from '@root/utils';

export class TaskService {
    async getAll({withError = false} = {}) {
        await sleep(Math.random() * 1000 + 1000);

        if (withError && Math.random() > 0.5) {
            throw new Error('Failed to fetch data');
        }

        const data = globalThis.localStorage.getItem('tasks') || JSON.stringify(defaultTasks);

        return JSON.parse(data) as Task[];
    }

    save(tasks: Task[]) {
        globalThis.localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}
