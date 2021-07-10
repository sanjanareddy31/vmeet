import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import { ChatEngine } from 'react-chat-engine';

// import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
// import './TextApp.css';

// const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
    },
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
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat App</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
};
//     const App = () => {
//         if (!localStorage.getItem('username')) return <LoginForm />;
      
//         return (
//           <ChatEngine
//             height="100vh"
//             projectID={projectID}
//             userName={localStorage.getItem('username')}
//             userSecret={localStorage.getItem('password')}
//             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//             onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()} />
//         );
// };

export default App;