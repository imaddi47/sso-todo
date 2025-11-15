const GRAPH_TYPE_RESOLVE = {
    TEST: "Test"
}

const TYPE_ENUM_NODE_RESOLVERS = {
    TEST: async function (id) {
        return {id, message: `TEST: ${id}!`}
    }
}

const TYPE_ENUM_NODES_RESOLVERS = {
    TEST: async function (ids) {
        return ids.map(id => ({id, message: `TEST: ${id}!`}))
    }
}

export default {
    Query: {
        node: async (parent, args, ctx, info) => {
            const returnData = await TYPE_ENUM_NODE_RESOLVERS[args.type](args.id);
            if(returnData) {
                returnData.nodeType = args.type;
            }
            return returnData;
        },
        nodes: async (parent, args, ctx, info) => {
            const returnData = (await TYPE_ENUM_NODES_RESOLVERS[args.type](args.ids)).map(m => ({...m, nodeType: args.type}));
            console.log(returnData);
            return returnData;
        }
    },
    Node: {
        __resolveType(parent) {
            return GRAPH_TYPE_RESOLVE[parent.nodeType];
        }
    }
}