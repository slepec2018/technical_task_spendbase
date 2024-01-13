import React from 'react';
import { observer } from 'mobx-react';
import treeStore from './store/treeStore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomTreeView from './components/CustomTreeView/CustomTreeView';

const App: React.FC = observer(() => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#171717',
        color: '#939393',
      }}
    >
      <Typography
        variant="h2"
      >
        Tree View App
      </Typography>
      {treeStore.isLoading ? (
        <Typography
        variant="h4"
        >
          Loading...
        </Typography>
        ) : (
          <CustomTreeView data={treeStore.data} />
        )}
    </Box>
  );
});

export default App;
