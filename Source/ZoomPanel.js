Ext.define('Ext.ux.ZoomPanel', {
    extend: 'Ext.Panel',
    xtype : 'zoompanel',
    
    config: {
        baseCls: Ext.baseCSSPrefix + 'zoompanel',

        layout: {
            type: 'fit',
            pack: 'center'
        }
    },
    
    initialize: function() {
        this.touches = 0;
        this.zoom = 100.0;
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
        this.touches = e.browserEvent.touches.length;
    },

    // @private
    onTouchMove: function(e) {
        e.preventDefault();
        if(this.touches == 2){
            this.doZoom(e.browserEvent.scale);
        }
    },

    // @private
    onTouchEnd: function(e) {
        if(this.touches == 2){
            this.doZoom(e.browserEvent.scale);
        }
        this.touches = e.browserEvent.touches.length;
    },

    // @private
    doZoom: function(scale) {
        this.fireEvent('beforeZoom', [this, this.zoom]);
        this.zoom = 100.0 * scale;
        if(this.zoom < 100)
            this.zoom = 100.0;
        this.element.setStyle('zoom', this.zoom + '%');
        this.fireEvent('zoom', [this, this.zoom]);
    }
});