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
  this.search = function (value) { };

  // 遍历
  var traverse = function (node, callback) {
    if (node == null) return;
    // callback(node.value); // 8 2 3 9  前序遍历
    traverse(node.left, callback);
    // callback(node.value);  // 2 3 8 9 中序遍历
    traverse(node.right, callback);
    callback(node.value); // 3 2 9 8 后续遍历
  };

  this.traverse = function (callback) {
    traverse(root, callback);
  };
  // 删除
  this.remove = function (value) { };

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
t.insert(10);
t.insert(1);
var treeNode = t.getNode();
// t.traverse(print)

function print(value) {
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
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 6,
        left: null,
        right: {
          value: 10,
          left: null,
          right: null
        }
      },
      right: {
        value: 8,
        left: null,
        right: null
      }
    },
    right: {
      value: 21,
      left: null,
      right: null
    }
  },
  right: {
    value: 5,
    left: null,
    right: null,
  },
};

// 不使用递归中根序
const traverseRoodMiddle = (bTree, fn) => {
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
// 不使用递归后根排序
function postorderTraversal(root, callback) {
  var p = root
  var stack = [root]
  var res = []
  while (stack.length > 0) {
    p = stack.pop()
    res.push(p.value)
    callback(p.value)
    if (p.left !== null) {
      stack.push(p.left)
    }
    if (p.right !== null) {
      stack.push(p.right)
    }
  }
  res.reverse()
  console.log(res)
  return res
}

// postorderTraversal(tree, print);



function postOrder(node, callback) { //非递归实现
  var stack = [];
  stack.push(node);
  stack.push(node);
  while (stack.length != 0) {
    node = stack.pop();
    console.dir(node)
    console.log(stack)
    console.log(stack.length != 0 && node == stack[stack.length - 1])
    if (stack.length != 0 && node == stack[stack.length - 1]) {
      if (node.lastElementChild) {
        stack.push(node.lastElementChild);
        stack.push(node.lastElementChild);
      }
      if (node.firstElementChild) {
        stack.push(node.firstElementChild);
        stack.push(node.firstElementChild);
      }
    } else {
      // callback(node);
    }
  }
}

postOrder(document.querySelector('html'), print)