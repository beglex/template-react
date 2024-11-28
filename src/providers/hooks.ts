import {useContext} from 'react';

import {Context, DispatchContext} from './contexts';

export function useTasks() {
    return useContext(Context);
}

export function useTasksDispatch() {
    return useContext(DispatchContext);
}
