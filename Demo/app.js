Ext.setup({
    onReady: function(){
        var zoomPanelDemo = {
            items: [
                {
                    dock : 'top',
                    xtype: 'toolbar',
                    title: 'Use 2 Finger Zoom!'
                },
                {
                    xtype: 'zoompanel',
                    width: 350,
                height: 370,
                    items: [
                        {
                            xtype: 'image',
                            src: 'http://placekitten.com/g/1000/1000'
                        }
                    ]
                }
            ]
        };
        /*
        if (!Ext.is.Phone) {
            var list = Ext.create('Ext.Panel', Ext.apply(zoomPanelDemo, {
                floating: true,
                width: 350,
                height: 370,
                centered: true,
                modal: true,
                hideOnMaskTap: false
            }));

            list.show();
        }
        else {*/
            Ext.create('Ext.Panel', Ext.apply(zoomPanelDemo, {
                fullscreen: true
            }));
        //}
    }
});