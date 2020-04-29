// Use the Queue method to level traverse.
var levelOrder = function (root) {
    // Create a array to store the node values.
    const result = [];

    // bfs = Breadth First Search.
    function bfs(node) {
        // node is the initially <root>.
        // queue places the root element in an array.
        const queue = [node];

        // The iteration always starts at the initial loop invocation.
        while (queue.length > 0) {
            let length = queue.length;

            // local represents the 
            const local = [];

            // Iterate through each node in the queue based on the length.
            for (let i = 0; i < length; i++) {
                // current represents the current node, which is the furthest left node in the queue.
                // .shift() will remove the first element in the queue array. 
                const current = queue.shift();
                
                // If the current node is not empty,
                // push it's val into local array.
                // Check it's left and right nodes similarly.
                if (current !== null) {
                    local.push(current.val);
                    if (current.left !== null) queue.push(current.left);
                    if (current.right !== null) queue.push(current.right);
                }
            }
            
            // If the local array has values, place it into result array.
            if (local.length > 0) {
                result.push(local);
            }
        }
    }
    bfs(root)
    return result
};