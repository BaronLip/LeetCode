var postorderTraversal = function (root, output = []) {

    if (root) {
        if (root.left) {
            postorderTraversal(root.left, output);
        }

        if (root.right) {
            postorderTraversal(root.right, output);
        }

        if (root.val != null) {
            output.push(root.val);
        }
    }
    return output;
};