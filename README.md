# simple to use simditor in vue

源代码20行以内，如功能不满足可自行修改。

## 使用方法
1. 引入 vue-simditor.js

```
<script src='/vue-simditor.js'></script>
```

2. 使用自定义组件

```
<simditor id="editor" v-model="message" v-bind:toolbar="['link', '|', 'image']"></simditor>
```


## 属性说明
id为必须传入, 识别生成编辑器

v-model 为绑定值

v-bind:toolbar 为自定义的simditor参数， 如需使用其他参数，请自行修改。


### [示例网站](https://tans.github.io/vue-simditor/demo.html)