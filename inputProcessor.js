class inputProcessor {
    setup(canvas, med){
        this.medi = med;
        canvas.addEventListener('mousemove', bind(this, this.mouseMove));
    }

    mouseMove = function(e){
        this.medi.mouseCallBack(e.offsetX, e.offsetY);
    }
}
function bind(scope, fn) {
    return function() {
        return fn.apply(scope, arguments);
    }
}