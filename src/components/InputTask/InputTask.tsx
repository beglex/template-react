import './InputTask.css';

import {useState} from 'react';

import {useTasksDispatch} from '@root/providers';

export function InputTask() {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setText(ev.target.value);
    };

    const handleClick = () => {
        dispatch({type: 'added', task: {text}});
        setText('');
    };

    const handleKeyUp = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter' && text) {
            handleClick();
        }
    };

    return (
        <div className="input-task">
            <input placeholder="Add task" value={text} onChange={handleChange} onKeyUp={handleKeyUp} />
            <button type="button" disabled={!text} onClick={handleClick}>
                Add
            </button>
        </div>
    );
}
