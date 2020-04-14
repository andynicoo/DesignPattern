class jQuery {
    constructor(selector){
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))
        console.log(dom)
        let length = dom ? dom.length : 0
        for(let i = 0; i< length; i++){
            this[i] = dom[i]
        }
        this.length = length
        this.selector = selector || ''
    }

    append(node) {
        //...
    }
    
    addClass(name){
        //...
    }

    html(data){
        //...
    }

    data(){

    }
}

window.$ = function(selector){
    return new jQuery(selector)
}

//测试代码
var $p = $('p')
console.log($p)
console.log($p.addClass)

// console 
// jQuery {0: p, 1: p, 2: p, length: 3, selector: "p"}