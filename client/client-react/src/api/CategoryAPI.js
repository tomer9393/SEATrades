
import axios from 'axios'

const baseUrl = 'http://193.106.55.117:8081/categories';
const ERROR = -1;

export const getAllCategories = async () => {
    try {
        const categories = await axios.get(`${baseUrl}/`);
        return categories;
    } catch (error) { throw ERROR; }
}

export const getCategoryByName = async (name) => {
    try {
        const category = await axios.get(`${baseUrl}/${name}`);
        return category;
    } catch (error) { throw ERROR; }
}
