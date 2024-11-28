import type {waitForOptions} from '@testing-library/react';

import {act, cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react';

import {InputTask} from '@root/components';
import {TaskProvider} from '@root/providers';

describe(`<${InputTask.name} />`, () => {
    const options: waitForOptions = {timeout: 5000};

    beforeEach(() => {
        act(() => render(
            <TaskProvider>
                <InputTask />
            </TaskProvider>,
        ));
    });

    afterEach(() => {
        cleanup();
    });

    it('Should add a task when clicking the Add button', async () => {
        const input: HTMLInputElement = await screen.findByPlaceholderText('Add task', {}, options);
        const button: HTMLButtonElement = await screen.findByRole('button', {name: 'Add'}, options);

        fireEvent.input(input, {target: {value: 'New Task'}});
        fireEvent.click(button);

        await waitFor(() => {
            expect(input).toHaveValue('');
            expect(button).toBeDisabled();
        }, options);
    });

    it('Should not add a task if input is empty', async () => {
        await waitFor(() => expect(screen.queryByText('Loading')).toBeNull(), options);

        const button: HTMLButtonElement = await screen.findByRole('button', {name: 'Add'}, options);

        fireEvent.click(button);

        await waitFor(() => {
            expect(button).toBeDisabled();
        }, options);
    });

    it('Should add a task when pressing Enter', async () => {
        await waitFor(() => expect(screen.queryByText('Loading')).toBeNull(), options);

        const input: HTMLInputElement = await screen.findByPlaceholderText('Add task', {}, options);

        fireEvent.change(input, {target: {value: 'New Task'}});
        fireEvent.keyUp(input, {key: 'Enter'});

        await waitFor(() => {
            expect(input).toHaveValue('');
        }, options);
    });
});
