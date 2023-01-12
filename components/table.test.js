import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Table from './Table';
import data from '../database/data.json'

jest.mock('../database/data.json', () => [
    {
        id: 10300,
        name: "XYZ",
        type: "Pair",
        homeoffice: "Chennai",
        grade: "Consultant",
        status: "Inactive"
    },
    {
        id: 10400,
        name: "ABC",
        type: "Anchor",
        homeoffice: "CBE",
        grade: "Senior Consultant",
        status: "Active"
    },
]);

afterEach(cleanup);

test('Table component renders correctly with mock data', () => {
    const { getByText } = render(<Table data={data} />);
    expect(getByText('XYZ')).toBeInTheDocument();
    expect(getByText('ABC')).toBeInTheDocument();
});