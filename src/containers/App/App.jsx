import cn from 'classnames';
import styles from './App.module.css';
// import { getApiResource } from '../../utils';

// const SWAPI_ROOT = 'https://swapi.dev/api/'
// const SWAPI_PEOPLE = 'people/'

// const resss = getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then(value => console.log(value));

const App = () => {
    return (
        <h1 className={cn(styles.header, styles.text)}>Hello baby</h1>
    )
}

export default App;