class HistoryRouter {
  constructor() {
    // 储存hash与callback键值对
    this.routes = {};
    // 在初始化时监听popstate事件
    this._bindPopState();
  }

  // 初始化
  init(path) {
    history.replaceState({ path: path }, null, path);
    this.routes[path] && this.routes[path]();
  }

  // 添加router和 callback函数（dom操作）
  route(path, callback) {
    this.routes[path] = callback || function () {};
  }

  // 路由切换
  go(path) {
    // 去哪个路由path，往history 里pushState 一个
    history.pushState({ path: path }, null, path);
    this.routes[path] && this.routes[path]();
  }

  // 绑定popState事件
  _bindPopState() {
    // 当浏览器后退前进的时候，或者调用history.back时，会触发popstate方法，然后我们更新对应路由的页面
    window.addEventListener("popstate", (e) => {
      const path = e.state && e.state.path;
      this.routes[path] && this.routes[path]();
    });
  }
}

window.Router = new HistoryRouter();

Router.init(location.pathname);

const content = document.querySelector("body");
const ul = document.querySelector("ul");


function changeBgColor(color) {
  content.style.backgroundColor = color;
}

Router.route("/", function () {
  changeBgColor("yellow");
});
Router.route("/blue", function () {
  changeBgColor("blue");
});
Router.route("/green", function () {
  changeBgColor("green");
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    Router.go(e.target.getAttribute("href"));
  }
});
