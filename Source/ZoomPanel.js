Ext.define('Ext.ux.ZoomPanel', function(){
    extend: 'Ext.Panel',
    xtype : 'zoompanel',
    
    config: {
        baseCls: Ext.baseCSSPrefix + 'list-item',

        layout: {
            type: 'fit',
            pack: 'center'
        }
    },
    
    initialize: function() {
        this.touches = 0;
        this.currentScale = 0.0;
        this.element.on({
            scope      : this,
            //tap        : 'onTap',
            touchstart : 'onTouchStart',
            touchmove  : 'onTouchMove',
            touchend   : 'onTouchEnd'
        });
        this.callParent();
    },

    // @private
    onTouchStart: function(e) {
        this.touches = e.touches.length;
    },

    // @private
    onTouchMove: function(e) {
        e.preventDefault();
        if(this.touches == 2){
            this.doZoom(e.scale);
        }
    },

    // @private
    onTouchEnd: function(e) {
        if(this.touches == 2){
            this.doZoom(e.scale);
        }
        this.touches = e.touches.length;
    },

    // @private
    doZoom: function(e) {
        this.fireEvent('beforeZoom', [this, 100.0 * this.currentScale]));
        this.currentScale += e.scale;
        if(this.currentScale < 0)
            this.currentScale = 0.0;
        var zoom = 100.0 * this.currentScale;
        this.element.setStyle('zoom', zoom + '%');
        this.fireEvent('zoom', [this, zoom]));
    }
});