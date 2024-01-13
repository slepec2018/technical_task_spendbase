import { makeAutoObservable, runInAction } from 'mobx';
import data from '../DUMMY_DATA/foldersDiagram';
import { TreeItemData } from '../types/data';


class TreeStore {
  data: TreeItemData[] = [];
  isLoading: boolean = false;
  creator: string = "Jonh";
  creatorList: string[] = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchData();
    this.getCreatorsList();
  }

  fetchData = async () => {
    try {
      runInAction(() => {
        this.isLoading = true;
      });

      // const response = await fetch('json address');
      // const data = await response.json();
      runInAction(() => {
        this.data = data;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
      });
      console.error('Error fetching data:', error);
    }
  };

  updateData = (newData: TreeItemData[]) => {
    runInAction(() => {
      this.data = newData;
    });
  };

  deleteItem = (itemId: string) => {
    const recursiveDelete = (items: TreeItemData[] | undefined) => {
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].id === itemId) {
          runInAction(() => {
            items.splice(i, 1);
            this.updateData([...this.data]);
          });
          return;
        }
        if (items[i].children) {
          recursiveDelete(items[i].children);
        }
      }
    };

    recursiveDelete(this.data);
  };

  getCreatorsList = () => {
    const creatorsList: string[] = [];

    this.data.forEach(item => {
      const creator = item.creator || '';
      if (!creatorsList.includes(creator)) {
        creatorsList.push(creator);
      }
    });

    runInAction(() => {
      this.creatorList = creatorsList;
    });
  };

  changeCreator = (newCreator: string) => {
    runInAction(() => {
      this.creator = newCreator;
    });
  };
}

const treeStore = new TreeStore();

export default treeStore;
