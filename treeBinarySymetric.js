var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }

    function isMirror(leftNode, rightNode){
        // If both sides don't exist...
        if (!leftNode && !rightNode) {
            return true;
        }


        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
            return false;
        }

        // Compares the leftSubTree of leftNode with rightSubTree of rightNode
        // and the rightSubtree of leftNode with leftSubTree of rightNode.
        return isMirror(leftNode.left, rightNode.right) && isMirror(leftNode.right, rightNode.left);

    }

    return isMirror(root.left, root,right)
};

root =  {
    val: 1,
    left: {
       val: 2,
       left: { val: 3, left: null, right: null },
       right: { val: 4, left: null, right: null } 
    },
    right: {
       val: 2,
       left: { val: 4, left: null, right: null },
       right: { val: 3, left: null, right: null } 
    } 
}