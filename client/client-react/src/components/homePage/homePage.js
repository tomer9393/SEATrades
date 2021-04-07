import Blog from './blog';
import Categories from './categories';
import MostSearch from './most_search';
import Newslatter from './newslatter';
import Testimonial from './testimonial';
import TopLocation from './top_location';
import Work from './work';
import SearchBar from '../header/search_bar';




function HomePage() {
    return (
        <>
        {/* <Categories /> */}
        <SearchBar/>
        <MostSearch /> 
        {/* <Work /> */}
        {/* <TopLocation />
        <Testimonial />
        <Blog /> */}
        <hr style={{width: '70%'}}></hr>
        <Newslatter />
        </>
    );
}

export default HomePage;