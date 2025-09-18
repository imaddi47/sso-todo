const TYPE_ENUM_NODE = {
    TEST: "Test"
}

const TYPE_ENUM_NODE_RESOLVERS = {
    TEST: async function () {
        const { id } = this;
        return {id, message: `TEST: ${id}!`}
    }
}

const TYPE_ENUM_NODES_RESOLVERS = {
    TEST: async function () {
        const { ids } = this;
        return ids.map(id => ({id, message: `TEST: ${id}!`}))
    }
}

export default {
    Query: {
        node: async (parent, args, ctx, info) => {
            const returnData = await TYPE_ENUM_NODE_RESOLVERS[args.type].call(args);
            if(returnData) {
                returnData.nodeType = args.type;
            }
            return returnData;
        },
        nodes: async (parent, args, ctx, info) => {
            const returnData = (await TYPE_ENUM_NODES_RESOLVERS[args.type].call(args)).map(m => ({...m, nodeType: args.type}));
            console.log(returnData);
            return returnData;
        }
    },
    Node: {
        __resolveType(parent) {
            return TYPE_ENUM_NODE[parent.nodeType];
        }
    }
}