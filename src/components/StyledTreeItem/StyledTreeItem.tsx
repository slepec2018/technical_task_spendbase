import React from 'react';
import { TreeItem } from '@mui/x-tree-view';
import { Box, Typography, IconButton } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { TreeItemData } from '../../types/data';
import { renderTree } from '../CustomTreeView/CustomTreeView';
import DeleteIcon from '@mui/icons-material/Delete';
import treeStore from '../../store/treeStore';

const StyledTreeItem: React.FC<{ data: TreeItemData }> = ({ data }) => {
  const handleDelete = () => {
    treeStore.deleteItem(data.id);
  };

  return (
    <TreeItem
      nodeId={data.id}
      label={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0.5,
            pr: 0,
            backgroundColor: data.highlighted ? '#555555' : 'transparent',
          }}
        >
          {data.type === 'file' && <InsertDriveFileIcon />}
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'inherit',
              flexGrow: 1
            }}
          >
            {data.name}
          </Typography>
          {treeStore.creator === data.creator && (
            <IconButton onClick={handleDelete}>
              <DeleteIcon
                sx={{
                  color: '#939393'
                }}
              />
            </IconButton>
          )}
        </Box>
      }
    >
      {data.children && renderTree(data.children)}
    </TreeItem>
  );
};

export default StyledTreeItem;