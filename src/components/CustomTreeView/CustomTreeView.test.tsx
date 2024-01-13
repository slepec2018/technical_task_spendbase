import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomTreeView from './CustomTreeView';
import data from '../../DUMMY_DATA/foldersDiagram';
import { TreeItemData } from '../../types/data';

describe('CustomTreeView component', () => {
  const mockData: TreeItemData[] = data;

  it('should filter items based on search input', () => {
    render(<CustomTreeView data={mockData} />);

    mockData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText('Search'), { target: { value: 'Файл 3' } });

    const fileElements = screen.getAllByText('Файл 3');

    fileElements.forEach((element) => {

      expect(element).toBeInTheDocument();

      expect(element).toHaveStyle({
        backgroundColor: expect.stringMatching(/rgb\(85, 85, 85\)/),
      });
    });
  });
});
