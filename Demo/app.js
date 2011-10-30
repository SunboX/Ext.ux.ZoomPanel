Ext.setup({
    onReady: function(){
        var panel = Ext.create('Ext.ux.ZoomPanel', {
            fullscreen: true,
        
            items: [
                {
                    dock : 'top',
                    xtype: 'toolbar',
                    title: 'Use 2 Finger Zoom!'
                },
                {
                    xtype: 'image',
                    src: 'http://placekitten.com/g/1000/1000'
                }
            ]
        });
    }
});