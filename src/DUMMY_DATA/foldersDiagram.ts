import { TreeItemData } from '../types/data';

const data: TreeItemData[] = [
  {
    id: 'folder1',
    name: "Папка 1",
    type: "folder",
    creator: "Jonh",
    children: [
      {
        id: 'folder2',
        name: "Папка 1.1",
        type: "folder",
        creator: "Jonh",
        children: [
          {
            id: 'file1',
            name: "Файл 1.1.1",
            type: "file",
            creator: "Jonh",
          },
          {
            id: 'file2',
            name: "Файл 1.1.2",
            type: "file",
            creator: "Jonh",
          },
          {
            id: 'file3',
            name: "Файл 1.1.3",
            type: "file",
            creator: "Jonh",
          }
        ]
      },
      {
        id: 'folder3',
        name: "Папка 1.2",
        type: "folder",
        creator: "Jonh",
        children: [
          {
            id: 'file4',
            name: "Файл 1.2.1",
            type: "file",
            creator: "Jonh",
          },
          {
            id: 'file5',
            name: "Файл 1.2.2",
            type: "file",
            creator: "Jonh",
          },
          {
            id: 'file6',
            name: "Файл 1.2.3",
            type: "file",
            creator: "Jonh",
          }
        ]
      },
      {
        id: 'file7',
        name: "Файл 1.3",
        type: "file",
        creator: "Jonh",
      }
    ]
  },
  {
    id: 'folder4',
    name: "Папка 2",
    type: "folder",
    creator: "Bill",
    children: [
      {
        id: 'folder5',
        name: "Папка 2.1",
        type: "folder",
        creator: "Bill",
        children: [
          {
            id: 'file8',
            name: "Файл 2.1.1",
            type: "file",
            creator: "Bill",
          },
          {
            id: 'file9',
            name: "Файл 2.1.2",
            type: "file",
            creator: "Bill",
          },
          {
            id: 'file10',
            name: "Файл 2.1.3",
            type: "file",
            creator: "Bill",
          }
        ]
      },
      {
        id: 'folder6',
        name: "Папка 2.2",
        type: "folder",
        creator: "Bill",
        children: [
          {
            id: 'file11',
            name: "Файл 2.2.1",
            type: "file",
            creator: "Bill",
          },
          {
            id: 'file12',
            name: "Файл 2.2.2",
            type: "file",
            creator: "Bill",
          },
          {
            id: 'file13',
            name: "Файл 2.2.3",
            type: "file",
            creator: "Bill",
          }
        ]
      },
      {
        id: 'file14',
        name: "Файл 2.3",
        type: "file",
        creator: "Bill",
      }
    ]
  },
  {
    id: 'folder7',
    name: "Папка 3",
    type: "folder",
    creator: "Jonh",
  },
  {
    id: 'file15',
    name: "Файл 3",
    type: "file",
    creator: "Jonh",
  }
];

export default data;
