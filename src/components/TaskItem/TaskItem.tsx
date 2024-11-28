import './TaskItem.css';

import {kebabCase} from 'lodash';
import {useRef, useState} from 'react';

import type {Task} from '@root/types';

import {useTasksDispatch} from '@root/providers';

interface Props {
    task: Task;
}

type Mode = 'edit' | 'show';

export function TaskItem({task}: Props) {
    const [mode, setMode] = useState<Mode>('show');
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useTasksDispatch();

    const toggleDone = (ev: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({type: 'changed', task: {...task, done: ev.target.checked}});
    const changeMode = (mode: Mode) => {
        setMode(mode);
        if (mode === 'edit' && inputRef.current) {
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
    };
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({type: 'changed', task: {...task, text: ev.target.value}});
    const handleDelete = () => dispatch({type: 'deleted', id: task.id});
    const handleKeyUp = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') {
            changeMode('show');
        }
    };

    return (
        <div className="task-item" data-testid={`test-${kebabCase(task.text)}`}>
            <input type="checkbox" checked={task.done} onChange={toggleDone} />
            <input
                ref={inputRef}
                type="text"
                value={task.text}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                disabled={mode === 'show'}
            />
            {mode === 'edit'
                ? (
                    <button type="button" onClick={() => changeMode('show')}>Save</button>
                )
                : (
                    <button type="button" onClick={() => changeMode('edit')}>Edit</button>
                )}
            <button type="button" onClick={handleDelete}>Delete</button>
        </div>
    );
}
