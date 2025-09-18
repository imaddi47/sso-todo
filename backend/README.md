### Basic GraphQL resolver
```gql
query TestIt {
    nodes(ids: [1,2,3], type: TEST) {
        id
        ... on Test {
            message
        }
    }
    node(id: 1, type: TEST) {
        id
        ... on Test {
            message
        }
    }
}
```