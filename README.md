在开发中，如果H5页面在`Android`手机的浏览器或者APP中打开，如果页面中的交互触发了输入键盘的弹起（通常是 `input`或者`textarea`元素获取焦点）， 那么页面如果底部有固定的元素，比如按钮（通常是通过`css`的`position: fixed`设置元素的定位）； 这个时候底部固定的元素也会随之被弹起， 此时底部固定元素是以弹起的输入框作为底部的边界的。

**vue-tomato**是一个`Vue.js`插件，目的是解决上面这个问题；解决的方式就是当输入键盘被弹起的时候，隐藏底部固定的元素。 当输入键盘收起的时候，再把隐藏的元素显示出来。

### 安装

```
yarn add vue-tomato
```

### 使用方式

+ 第一步，在项目中引入`vue-tomato`
    ```javascript
    import Tomato from 'vue-tomato';
    // ...
    Vue.use(Tomato);
    ```
+ 第二步，在页面上指定的固定元素上添加指令`v-tomato-toggle`
    ```javascript
    <button v-tomato-toggle class="btn">底部固定的按钮</button>
    ```
+ 可选配置，指令`v-tomato-toggle`接收一个绑定的值作为指令的配置，目前只有一个配置参数`isFooterToggleActive`。表示是否开启指令的相关功能，可以动态关闭；默认是开启的状态。
    ```vue
    <button v-tomato-toggle="conf" class="btn">底部固定的按钮</button>
    ```
    ```vue
    //...
    data() {
        return {
          conf: {
            // 是否启用
            isFooterToggleActive: true
          }
        }
    }
    //...
    ```

如果你的项目不是使用`vue.js`开发的话，可以简单看一下[源码](https://github.com/dreamapplehappy/vue-tomato/blob/main/src/main.js)部分，然后根据自己的项目需求自定义解决方案。

最后，如果有什么意见和建议可以提 [issues](https://github.com/dreamapplehappy/vue-tomato/issues) 或者 [pull requests](https://github.com/dreamapplehappy/vue-tomato/pulls); 如果项目对你有帮助，也欢迎随手点个⭐ **Star**，支持一下。
