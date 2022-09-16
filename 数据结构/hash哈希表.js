var hashTable = function () {
  var items = []
  /**
   * 散列函数
   * key => number => items[number]
   * ascii 转
   * 这个函数的取到的散列值可能是一样的
   */
  var loseloseHashCode = function (key) {
    // jobs
    var hash = 0
    for (var i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt()
    }
    return hash % 37
  }
}


// 散列冲突 key hashcode 一样
// 1. 分离链接法 => 冲突的那一项利用链表结构，存next （空间有点大，如果为空列表的话 变为undefined优化一下）

// 2. 线性探查法 => 冲突时，存下一项，如果没有存，有的话继续找下一项，直到没有
// 这个方法的好处是：代码简单，没有开辟链表新空间



// 好的方式就是 djb2hashcode ==> 重复度比较低，

var djb2hashcode = function (key){
  var hash = 5381 
  for (let i= 0; i < key.length; i++) {
     hash = hash * 33 + key[i].charCodeAt(i)
  }
  return hash % 1013
}