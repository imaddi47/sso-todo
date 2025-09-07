export default {
    Test: {
        id: ({ id }) => {
            return `Test:${id}`;
        },
        message: ({ message }) => {
            return message
        }
    }
}