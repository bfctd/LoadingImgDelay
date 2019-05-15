# LoadingImgDelay
基于jquery自己开发的图片懒加载插件


##首先引入官方jquery文件
```
<script src="./jquery.js"></script>
```

##再引入LoadingImgDelay本插件
```
<script src="./LoadingImgDelay.js"></script>
```

##定义一个图片真实的url列表
```
var arr = [
        'http://img5.imgtn.bdimg.com/it/u=3985625818,1688087717&fm=11&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1517597033,64748178&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=2771751783,3118716816&fm=26&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=474116397,1427705304&fm=11&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=86938302,3313705311&fm=11&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=2921568047,453679748&fm=26&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=3112993479,79641540&fm=26&gp=0.jpg',
  ]
```
## new一个实例化对象并且配置参数
```
    new LoadingImgDelay({
        imgSrcList: imgSrc, // 真实图片列表数组,
        imgClassOrNodeName: 'img', // 要懒加载的图片标签名或class值，默认是img标签
        srcNameString: 'data-src' // 存储真实图片的data-*，默认是'data-src'
    })
```

#注
##1、所有图片默认的图为数组第一项

##2、真实图片列表和所对应的img不对应，则不会更改

