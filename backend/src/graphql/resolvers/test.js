export default {
    Test: {
        id: ({ id }) => {
            return `Test:${id}`;
        },
        message: ({ message }) => {
            return message
        }
    },
    TestMutation: {
        testField: () => {
            return "This is a test field from TestMutation";
        }
    }
}