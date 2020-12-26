
function Promise(executor) {
  var self = this;
  self.data = null
  self.status = 'pending'
  self.onResolvedCallback = []
  self.onRejectedCallback = []
  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.onResolvedCallback.forEach(item => {
        item(value)
      })
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.onRejectedCallback.forEach(item => {
        item(reason)
      })
    }
  }
  try {
    executor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  var self = this
  var promise2
  // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
  onResolved = typeof onResolved === 'function' ? onResolved : function (v) { return v } // 值可以穿透
  onRejected = typeof onRejected === 'function' ? onRejected : function (r) { return r }
  if (self.status === 'resolved') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        var x = onResolved(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  if (self.status === 'rejected') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        var x = onRejected(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          reject(x)
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  if (self.status === 'pending') {
    return promise2 = new Promise(function (resolve, reject) {
      self.onResolvedCallback.push(function (value) {
        try {
          var x = resolve(value)
          if (x instanceof promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
      self.onRejectedCallback.push(function (reason) {
        try {
          var x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

// 为了下文方便，我们顺便实现一个catch方法
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

// 返回结果为数组，有一个失败就直接reject 数组未调用的直接没了。
myPromise.all = function (promises) {
  var results = [];
  var completedPromises = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completedPromises += 1;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

// 如果reject 继续尝试，知道传入的次数还是失败，那么就失败，否者成功
myPromise.retry = function (fn, num) {
  return new Promise(function (resolve, reject) {
    while (num > 0) {
      fn.then(res => {

      }).catch(err => {
        if (!num) reject(e)
      })
      try {
        const res = await fn
        resolve(res)
        num = 0
      } catch (e) {
        if (!num) reject(e)
      }
      num--;
    }
  });
};

// 返回promise，不管失败还是成功都是resolve。
myPromise.allSettled = function (promises) {
  if (promises instanceof Array) {
    let result = [];
    promises.forEach((i) => {
      ret.push(
        new Promise(function (resolve, reject) {
          i.then((v) => {
            resolve({ state: "fulfilled", data: v });
          }).catch((e) => {
            resolve({ state: "rejected", reason: e });
          });
        })
      );
    });
    return Promise.all(result);
  }
  return Promise.reject();
};

// 返回promise，race竞争的意思，就是看传入数组的是哪一个先出结果，最先返回的就是race的返回结果
myPromise.race = function (promises) {
  return new Promise(function (resolve, reject) {
    promises.forEach(p => {
      Promise.resolve(p).then(res => {
        resolve(res)
      }, reject)
    })
  })
}
