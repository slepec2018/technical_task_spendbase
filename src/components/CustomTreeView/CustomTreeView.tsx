import React, { useState } from 'react';
import { TreeView } from '@mui/x-tree-view';
import { Box, TextField, InputAdornment, IconButton, MenuItem, Select } from '@mui/material';
import { TreeItemData } from '../../types/data';
import StyledTreeItem from '../StyledTreeItem/StyledTreeItem';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ClearIcon from '@mui/icons-material/Clear';
import treeStore from '../../store/treeStore';

interface CustomTreeViewProps {
  data: TreeItemData[];
}

export const renderTree = (items: TreeItemData[]) => {
  return items.map((item) => (
    <StyledTreeItem key={item.name} data={item} />
  ));
};

const CustomTreeView: React.FC<CustomTreeViewProps> = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [selectedCreator, setSelectedCreator] = useState<string>(treeStore.creator);

  const getExpandedFolders = (items: TreeItemData[]): string[] => {
    let expandedFolders: string[] = [];

    items.forEach((item) => {
      if (item.type === 'folder') {
        expandedFolders.push(item.id);

        if (item.children) {
          expandedFolders = expandedFolders.concat(getExpandedFolders(item.children));
        }
      }
    });

    return expandedFolders;
  };

  const allExpandedFolders = getExpandedFolders(data);

  const getUpdatedDataRecursive = (query: string, items: TreeItemData[]): TreeItemData[] => {
    const lowerCasedQuery = query.toLowerCase();
  
    return items.map((item) => {

      return {
      ...item,
      highlighted: query !== '' && item.name.toLowerCase().includes(lowerCasedQuery),
      children: item.children ? getUpdatedDataRecursive(query, item.children) : undefined,
      }
    });
  };
  
  const getUpdatedData = (query: string) => {
    return getUpdatedDataRecursive(query, data);
  };

  const updatedData = getUpdatedData(searchQuery);

  const handleSearchQuery = (query: string) => {
    setIsSearchActive(true);
    setSearchQuery(query);
  }

  const handleCleanSearch = () => {
    setSearchQuery('');
    setIsSearchActive(false);
  }

  const handleCreatorChange = (creator: string) => {
    treeStore.changeCreator(creator);
    setSelectedCreator(creator);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#272727',
        minHeight: '65%',
        minWidth: '50%',
        padding: '20px',
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => handleSearchQuery(e.target.value)}
        sx={{
          marginTop: 2,
          marginBottom: 2,
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#555555',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#939393',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#939393',
          },
          '& .MuiSvgIcon-root': {
            color: '#939393',
          },
        }}
        InputProps={{
          style: {
            color: '#939393',
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleCleanSearch} size="large">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Select
        value={selectedCreator}
        onChange={(e) => handleCreatorChange(e.target.value as string)}
        displayEmpty
        fullWidth
        sx={{
          color: '#939393',
          marginBottom: 2,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#939393',
          },
          '& .MuiSvgIcon-root': {
            color: '#939393',
          },
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#555555',
            },
          },
        }}
      >
        <MenuItem value="" disabled>
          Select Creator
        </MenuItem>
        {treeStore.creatorList.map((creator) => (
          <MenuItem key={creator} value={creator}>
            {creator}
          </MenuItem>
        ))}
      </Select>
      {isSearchActive && (
        <TreeView
          aria-label="custom tree view"
          defaultCollapseIcon={<FolderOpenIcon />}
          defaultExpandIcon={<FolderIcon />}
          expanded={allExpandedFolders}
        >
          {renderTree(updatedData)}
        </TreeView>
      )}
      {!isSearchActive && (
        <TreeView
          aria-label="custom tree view"
          defaultCollapseIcon={<FolderOpenIcon />}
          defaultExpandIcon={<FolderIcon />}
        >
          {renderTree(updatedData)}
        </TreeView>
      )}
    </Box>
  );
};

export default CustomTreeView;
