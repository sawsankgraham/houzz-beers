import Constants from "../shared/constants.js"

// Created only the get function since that is all we need for this application
export default {
    // Get function with pagination implemented. 
    async get(url, page = 1, limit = 10) {
        try {
            const response = await fetch(`${Constants.base_url}/${url}?per_page=${limit}&page=${page}`)

            if (!response.ok) {
                throw new Error('Response not OK')
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error) // IMPROVE: errors could be handled bettert
        }
    }
};