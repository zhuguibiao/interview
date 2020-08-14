# vue 规范

- 文件名采用驼峰命名，首字母大写

- vue methods 的每个函数，都要加上块注释，用以解释该函数的作用

### data

- 为了更好的隔离数据，应该采用分块定义的方式，以下是根据我们项目提取出来的部分分块模版，
以后新建的页面必须采用此模版的定义方式
```javascript 1.8
data() {
    return {
        dialog: { // 弹窗状态位
            search: false,
            ...
        },
        page: { // 分页
            num: 1,
            size: 10,
            total: 0
        },
        table: { // 表格数据
            data: [],
            template: [
                {
                    prop: 'id',
                    label: 'id'
                },
                ...
            ]
        },
        search: { // 搜索项
            userName: '',
            ...
        },
        ...
    };
}
```

### table 分页

- getTableData 函数请求表格数据
```javascript 1.8
methods: {
    getTableData() {
        // do something
    } 
}
```

- pageNumChange 函数修改当前页码
```javascript 1.8
methods: {
    pageNumChange(num) {
        this.page.num = num;
    } 
}
```

- pageSizeChange 函数修改每页数量
```javascript 1.8
methods: {
    pageSizeChange(num) {
        this.page.size = num;
    } 
}
```

### 组件

- 对于引入的自定义组件，采用 'v' 前缀重命名
```javascript 1.8
import vSearch from './Search';
```

- 组件必须加注释
```javascript 1.8
<!--设备新增-->
<v-device-insert/>
```