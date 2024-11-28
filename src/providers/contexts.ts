import {createContext} from 'react';

import type {Task} from '@root/types';

import type {Action} from './reducer';

export const Context = createContext<Task[]>([]);
export const DispatchContext = createContext<React.Dispatch<Action>>(() => {});
