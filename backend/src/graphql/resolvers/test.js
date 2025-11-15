export default {
    Mutation: {
        test: () => {
            return {};
        }
    },
    Test: {
        id: ({ id }) => {
            return `Test:${id}`;
        },
        message: ({ message }) => {
            return message
        }
    },
    TestMutation: {
        testField: (parentArgs, args, context, info) => {
            return "This is a test field from TestMutation";
        }
    }
}