import MostSearch from '../mostSearchedPage/mostSearched';
import Newslatter from './newslatter';
import SearchBar from '../header/search_bar';

function HomePage() {
    return (
        <>
        <SearchBar/>
        <MostSearch /> 
        <hr style={{width: '70%'}}></hr>
        <Newslatter />
        </>
    );
}

export default HomePage;