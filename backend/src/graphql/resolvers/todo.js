export default {
    Mutation: {
        todo: () => {
            return {};
        }
    },
    Todo: {
        id: ({ id }) => {
            return id;
        },
        title: ({ title }) => {
            return title;
        },
        description: ({ description }) => {
            return description;
        },
        isCompleted: ({ isCompleted }) => {
            return isCompleted;
        },
        isDeleted: ({ isDeleted }) => {
            return isDeleted;
        },
        createdAt: ({ createdAt }) => {
            return createdAt;
        }
    },
    TodoMutation: {
        createTodos: (_, { input }, ctx, info) => {
            console.log(input);
            return input.map(arg => ({
                    id: 1,
                    title: arg.title,
                    description: arg.description,
                    isCompleted: arg.isCompleted,
                    isDeleted: false,
                    isCompleted: false,
                    createdAt: new Date()
                })
            );
        }
    }
}