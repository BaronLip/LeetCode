var inorderTraversal = function (root, output = []) {
    
    if (root) {
        if (root.left) {
            inorderTraversal(root.left, output);
        }

        if (root.val != null) {
            output.push(root.val);
        }

        if (root.right) {
            inorderTraversal(root.right, output);
        }
    }
    return output;
};
