let output;

var preorderTraversal = function(root, output = []) {
	if (root) {
		if (root.val != null) {
			output.push(root.val);
		}

		if (root.left) {
			preorderTraversal(root.left, output);
		}

		if (root.right) {
			preorderTraversal(root.right, output);
		}
	}
	return output;
};
