
window.WH = window.WH || {};

(function (ns) {
    
    function createCanvasEPGView(specs) {
        let that,
            processor = specs.processor,
            staticCtx = specs.staticCtx,
            dynamicCtx = specs.dynamicCtx,
            
            initialise = function() {
                
            },
            
            drawStatic = function() {
                console.log(staticCtx.canvas);
            }
            
            /**
             * Called before this view is deleted.
             */
            terminate = function() {};
        
        that = specs.that || {};
        
        initialise();
        
        return that;
    }

    ns.createCanvasEPGView = createCanvasEPGView;

})(WH);