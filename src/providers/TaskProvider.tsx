import {useEffect, useReducer, useState} from 'react';

import {Loader} from '@root/components';
import {TaskService} from '@root/services';

import {Context, DispatchContext} from './contexts';
import {reducer} from './reducer';

type Mode = 'Loading' | 'Loaded' | 'Error';

const service = new TaskService();

export function TaskProvider({children}: React.PropsWithChildren) {
    const [tasks, dispatch] = useReducer(reducer, []);
    const [mode, setMode] = useState<Mode>('Loading');
    const [error, setError] = useState('');

    useEffect(() => {
        let didCancel = false;

        service
            .getAll()
            .then((tasks) => {
                if (!didCancel) {
                    dispatch({type: 'initialized', tasks});
                    setMode('Loaded');
                }
            })
            .catch((err: Error) => {
                if (!didCancel) {
                    setMode('Error');
                    setError(err.message);
                }
            });

        return () => {
            didCancel = true;
        };
    }, []);

    useEffect(() => {
        if (mode === 'Loaded') {
            service.save(tasks);
        }
    }, [tasks, mode]);

    if (mode === 'Loading') {
        return <Loader text={mode} />;
    }

    if (mode === 'Error') {
        return <Loader text={`${mode}: ${error}`} />;
    }

    return (
        <Context.Provider value={tasks}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </Context.Provider>
    );
}
