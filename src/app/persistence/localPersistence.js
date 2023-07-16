// Created a local persistence using localstorage. We can swap out localStorage with any other storage if needed
// Need to check if the window object is accessible, logs error if not checked 

export default {
    // Get
    read(key) {
        if (typeof window !== 'undefined') return JSON.parse(localStorage.getItem(key))
    },
    store(key, value) {
        try {
            if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.log(e)
        }
    },
    delete(key) {
        if (typeof window !== 'undefined') localStorage.removeItem(key)
    }
};