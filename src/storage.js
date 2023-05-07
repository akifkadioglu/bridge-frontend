export const storage = {

    key: {
        DARK_MODE: 'dark_mode',
        LANGUAGE: 'language'
    },

    push(key, value) {
        localStorage.setItem(key, value)
    },
    pull(key) {
        return localStorage.getItem(key)
    },
    remove(key) {
        localStorage.removeItem(key)
    }
}