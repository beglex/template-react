import type {Task} from '@root/types';

import {uuid} from '@root/utils';

export type Action =
  | {type: 'initialized'; tasks: Task[]}
  | {type: 'added'; task: Omit<Task, 'id' | 'done'>}
  | {type: 'changed'; task: Task}
  | {type: 'deleted'; id: Task['id']};

export function reducer(state: Task[], action: Action) {
    switch (action.type) {
        case 'initialized':
            return action.tasks;
        case 'added':
            return [...state, {id: uuid(), text: action.task.text, done: false}];
        case 'changed':
            return state.map(task => (task.id === action.task.id ? action.task : task));
        case 'deleted':
            return state.filter(task => task.id !== action.id);
        default:
            throw new Error('Unknown action');
    }
}
