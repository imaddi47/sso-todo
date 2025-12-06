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
        isCompleted: ({ is_completed }) => {
            return is_completed;
        },
        isDeleted: ({ is_deleted }) => {
            return is_deleted;
        },
        createdAt: ({ created_at }) => {
            return created_at;
        }
    },
    TodoMutation: {
        createTodos: async (_, { input }, { db }, info) => {
            console.log(input);
            const preparedData = input.map(arg => ({
                    title: arg.title,
                    description: arg.description
                })
            );
            const data = await db('todos.todo').insert(preparedData).returning('*');
            console.log(data);
            return data;
        }
    }
}