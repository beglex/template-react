import type {waitForOptions} from '@testing-library/react';

import {act, cleanup, fireEvent, render, screen, waitFor, within} from '@testing-library/react';
import {kebabCase} from 'lodash';

import {TaskList} from '@root/components';
import {defaultTasks} from '@root/constants';
import {TaskProvider} from '@root/providers';

describe(`<${TaskList.name} />`, () => {
    const options: waitForOptions = {timeout: 5000};

    beforeEach(() => {
        act(() => render(
            <TaskProvider>
                <TaskList />
            </TaskProvider>,
        ));
    });

    afterEach(() => {
        cleanup();
    });

    it('Should render tasks correctly', async () => {
        await waitFor(() => expect(screen.queryByText('Loading')).toBeNull(), options);

        const list: HTMLUListElement = screen.getByRole('list');

        defaultTasks.forEach((task) => {
            const item = within(list).getByTestId(`test-${kebabCase(task.text)}`);
            expect(item).toBeInTheDocument();
        });
    });

    it('Should handle task deletion', async () => {
        await waitFor(() => expect(screen.queryByText('Loading')).toBeNull(), options);

        const list: HTMLUListElement = screen.getByRole('list');

        defaultTasks.forEach((task) => {
            const item = within(list).getByTestId(`test-${kebabCase(task.text)}`);
            const deleteButton: HTMLButtonElement = within(item).getByText('Delete');
            fireEvent.click(deleteButton);
        });

        expect(list).toBeEmptyDOMElement();
    });
});
