var Tree = function () {
  var Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
  var root = null;
  var insetNode = function (node, newNode) {
    if (newNode.value > node.value) {
      // 往右走
      if (node.right === null) {
        node.right = newNode;
      } else {
        insetNode(node.right, newNode);
      }
    } else if (newNode.value < node.value) {
      // 往左走
      if (node.left === null) {
        node.left = newNode;
      } else {
        insetNode(node.left, newNode);
      }
    }
  };
  // 插入
  this.insert = function (value) {
    var newNode = new Node(value);
    if (root === null) {
      root = newNode;
    } else {
      insetNode(root, newNode);
    }
  };
  // 搜索
  this.search = function (value) {};
  // 遍历
  var traverse = function (node, callback) {
    if (node == null) return;
    // callback(node.value); 8 2 3 9  前序遍历
    traverse(node.left, callback);
    // callback(node.value);  2 3 8 9 中序遍历
    traverse(node.right, callback);
    callback(node.value); // 3 2 8 9 后续遍历
  };
  this.traverse = function (callback) {
    traverse(root, callback);
  };
  // 删除
  this.remove = function (value) {};

  // 获取树
  this.getNode = function () {
    return root;
  };
};

var t = new Tree();
t.insert(8);
t.insert(2);
t.insert(3);
t.insert(9);

var print = function (value) {
  console.log("value---", value);
};

// t.traverse(print);

/**
 * 二叉树
 * 前序遍历：根结点 ---> 左子树 ---> 右子树
 * 中序遍历：左子树---> 根结点 ---> 右子树
 * 后序遍历：左子树 ---> 右子树 ---> 根结点
 */

const tree = {
  value: 1,
  left: { value: 2, left: { value: 4, left: null, right: null } },
  right: {
    value: 5,
    left: null,
    right: null,
  },
};


// 不使用递归中根序
function traversalTreeMiddle(tree, fn) {
  var current = tree;
  var stack = [];
  while (true) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    if (stack.length > 0) {
      current = stack.pop();
      fn(current.value);
      current = current.right;
      continue;
    } else {
      break;
    }
  }
}

// 不使用递归中根序
const traverseRoodMiddle = (bTree, fn) => {
  debugger;
  const stack = [];
  let current = bTree;
  while (stack.length > 0 || current) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      fn(current.value);
      current = current.right;
    }
  }
};

// 不使用递归前根序
const traverseRoodQian = (bTree, fn) => {
  const stack = [];
  let current = bTree;
  while (stack.length > 0 || current) {
    if (current) {
      fn(current.value);
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      current = current.right;
    }
  }
};

traverseRoodMiddle(tree, print);
