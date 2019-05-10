# simple to use simditor in vue

源代码20行以内，如功能不满足可自行修改。

## 使用方法
1. 引入依赖

```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<link href="https://cdn.jsdelivr.net/npm/simditor@2.3.19/styles/simditor.css" rel="stylesheet" type="text/css" ></link>
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dompurify@1.0.10/dist/purify.min.js"></script>
<script src="https://simditor.tower.im/assets/scripts/module.js"></script><!-- 这文件只能从官网源码获取 -->
<!-- <script src="https://cdn.jsdelivr.net/npm/simple-module@3.0.3/dist/simple-module.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/simple-hotkeys@1.0.3/lib/hotkeys.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/simditor@2.3.19/lib/simditor.min.js"></script>
```

2. 引入 vue-simditor.js

```
<script src='/vue-simditor.js'></script>
```

3. 使用自定义组件

```
<simditor id="editor" v-model="message" v-bind:toolbar="['link', '|', 'image']"></simditor>
```


## 属性说明
id为必须传入, 识别生成编辑器

v-model 为绑定值

v-bind:toolbar 为自定义的simditor参数， 如需使用其他参数，请自行修改。


### [示例网站](https://tans.github.io/vue-simditor/demo.html)
