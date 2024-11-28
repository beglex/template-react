import type {waitForOptions} from '@testing-library/react';

import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {kebabCase} from 'lodash';

import type {Task} from '@root/types';

import {TaskContainer} from '@root/containers';

describe(`<${TaskContainer.name}>`, () => {
    const options: waitForOptions = {timeout: 5000};
    const task: Partial<Task> = {text: 'New Task;'};

    it('Should render the task container and interact with tasks', async () => {
        render(
            <TaskContainer />,
        );

        await waitFor(() =>
            expect(screen.queryByText('Loading')).toBeNull(), options);

        const input: HTMLInputElement = screen.getByPlaceholderText('Add task');
        fireEvent.change(input, {target: {value: task.text}});
        fireEvent.keyUp(input, {key: 'Enter'});

        await waitFor(async () => {
            const item: HTMLDivElement = await screen.findByTestId(`test-${kebabCase(task.text)}`);
            expect(item).toBeInTheDocument();
        });
    });
});
