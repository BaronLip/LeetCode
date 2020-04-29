var maxDepth = function(root, depth = 0) {
    console.log(depth)
    if (root === null) {
        return 0;
    }       
    
    let left = root.left ? maxDepth(root.left, depth) : depth;
    
    let right = root.right ? maxDepth(root.right, depth) : depth;
    
    depth = left >= right ? left : right;
    
    return depth += 1;
};