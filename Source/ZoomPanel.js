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
    
    construct: function(){
        
        
        
        this.callParent();
    }
});