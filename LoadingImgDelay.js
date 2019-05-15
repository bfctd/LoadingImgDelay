    window.LoadingImgDelay = function (option) {
        this.imgList = option.imgClassOrNodeName || $('img')
        this.imgSrc = option.imgSrcList || []
        this.dataSrc = option.srcNameString || 'data-src'
        this.main()
    }

    LoadingImgDelay.prototype = {
        main() {
            console.log(this.dataSrc)
            let [lookH, docH, rollH] = [$(window).height()]
            $(this.imgList).attr({src: this.imgSrc[0]})
            this.imgList = Array.prototype.slice.call($(this.imgList))

            LoadingImgDelay.loadImg(this.imgList, this.imgSrc, lookH,this.dataSrc)
            $(window).on('scroll', () => {
                LoadingImgDelay.loadImg(this.imgList, this.imgSrc, lookH,this.dataSrc)

                if (LoadingImgDelay.noListon(this.imgList, this.imgSrc)) {
                    $(window).off('scroll')
                }
            })
        }
    }
    LoadingImgDelay.loadImg = function (list, src, lookH, dataSrc) {
        // console.log(this)//this指向这个构造函数
        list.forEach((item, index) => {
            if (!$(item).attr(dataSrc)) {
                $(item).attr(dataSrc, src[index])
            }

            rollH = $(window).scrollTop()

            console.log($(item))
            docH = $(item).offset().top
            if (docH - rollH < lookH) {
                item.src = item.getAttribute(dataSrc)
            }
        })
    }
    LoadingImgDelay.noListon = function (list, src) {
        let noListon = list[src.length - 1].src === src[src.length - 1]
        return noListon
    }