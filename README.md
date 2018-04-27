- navList1: 每次返回一个新的 items

  ```js
  store:{
      items: {...}
  }
  ```

  ​

- navList2: 分离出一个 ids 用来进行 map 渲染，然后每个 item 与 redux 相连

    ```js
    store:{
        ids: {...},
        items: {...}
    }
    ```

- navList3: 范式化结构，store 中只有 items，列表只进行初始化渲染，不再更新

    ```js
    store:{
        items: {...}
    }
    ```

    ​

