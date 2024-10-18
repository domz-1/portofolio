import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';

    interface IAltStack{
        children: React.ReactNode;
        className?: string,
        id?: string
    }
    interface IState {
        theme: {
        darkMode: boolean;
        };
    }
    
    const AltStack = (props :IAltStack) => {
    const darkMode = useSelector<IState, boolean>((state) => state.theme.darkMode);
    const AltTheme = darkMode ? darkTheme : lightTheme;

    return (
        <Stack sx={{ bgcolor: AltTheme.palette.secondary.main }} className={props.className} id={props.id}>
            {props.children}
        </Stack>
    );
    }

    export default AltStack;