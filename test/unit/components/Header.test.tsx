import '@testing-library/jest-dom';
import {render} from '@testing-library/react';

import {Header} from '@root/components';

describe(`<${Header.name} />`, () => {
    it('Should render', () => {
        const result = render(<Header text="Test" />);

        expect(result.container.textContent).toEqual('Test');
    });
});
