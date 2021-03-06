import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));

const App = () => {

    const classes = useStyles();

    return (
      <div className={classes.wrapper}>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    );
  };


export default App;