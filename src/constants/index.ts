import type {Task} from '@root/types';

import {uuid} from '@root/utils';

export const defaultTasks: Task[] = [{id: uuid(), text: 'Write some code', done: false}];
