import type {waitForOptions} from '@testing-library/react';

import {fireEvent, render, screen, waitFor, within} from '@testing-library/react';
import {kebabCase} from 'lodash';

import type {Task} from '@root/types';

import {TaskItem} from '@root/components/TaskItem';
import {uuid} from '@root/utils';

describe(`<${TaskItem.name} />`, () => {
    const options: waitForOptions = {timeout: 5000};
    const task: Task = {id: uuid(), text: 'Test task', done: false};

    it('Should render task correctly', async () => {
        render(<TaskItem task={task} />);

        await waitFor(() => expect(screen.queryByText('Loading')).toBeNull(), options);

        const item: HTMLDivElement = await screen.findByTestId(`test-${kebabCase(task.text)}`);
        const checkbox: HTMLInputElement = item.querySelector('input[type="checkbox"]')!;
        const text: HTMLInputElement = item.querySelector('input[type="text"]')!;
        const editButton: HTMLButtonElement = within(item).getByText('Edit');
        const deleteButton: HTMLButtonElement = within(item).getByText('Delete');

        for (const elem of [item, checkbox, text, editButton, deleteButton]) {
            expect(elem).toBeInTheDocument();
        }
    });

    it('Should change state to edition', async () => {
        render(<TaskItem task={task} />);

        await waitFor(() => expect(screen.queryByText('Loading')).toBeNull(), options);

        const item: HTMLDivElement = await screen.findByTestId(`test-${kebabCase(task.text)}`);
        const editButton: HTMLButtonElement = within(item).getByText('Edit');

        fireEvent.click(editButton);

        const saveButton = within(item).getByText('Save');

        expect(saveButton).toBeInTheDocument();
    });

    it('Should change state to done', async () => {
        render(<TaskItem task={{...task, done: true}} />);

        await waitFor(() => expect(screen.queryByText('Loading')).toBeNull(), options);

        const item: HTMLDivElement = await screen.findByTestId(`test-${kebabCase(task.text)}`);
        const checkbox: HTMLInputElement = item.querySelector('input[type="checkbox"]')!;

        expect(checkbox).toBeChecked();
    });
});
