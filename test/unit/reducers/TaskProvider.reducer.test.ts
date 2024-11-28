import type {Action} from '@root/providers/reducer';
import type {Task} from '@root/types';

import {TaskProvider} from '@root/providers';
import {reducer} from '@root/providers/reducer';

describe(`<${TaskProvider.name}> Reducer`, () => {
    const initialState: Task[] = [];

    it('Should initialize tasks', () => {
        const action: Action = {type: 'initialized', tasks: [{id: '1', text: 'Task 1', done: false}]};
        const newState = reducer(initialState, action);
        expect(newState).toEqual([{id: '1', text: 'Task 1', done: false}]);
    });

    it('Should add a new task', () => {
        const action: Action = {type: 'added', task: {text: 'New Task'}};
        const newState = reducer(initialState, action);
        expect(newState).toHaveLength(1);
        expect(newState[0]).toHaveProperty('id');
        expect(newState[0]).toHaveProperty('done', false);
        expect(newState[0]).toHaveProperty('text', 'New Task');
    });

    it('Should update a task', () => {
        const state: Task[] = [{id: '1', text: 'Task 1', done: false}];
        const action: Action = {type: 'changed', task: {id: '1', text: 'Updated Task', done: true}};
        const newState = reducer(state, action);
        expect(newState[0].text).toBe('Updated Task');
        expect(newState[0].done).toBe(true);
    });

    it('Should delete a task', () => {
        const state: Task[] = [{id: '1', text: 'Task 1', done: false}];
        const action: Action = {type: 'deleted', id: '1'};
        const newState = reducer(state, action);
        expect(newState).toHaveLength(0);
    });
});
