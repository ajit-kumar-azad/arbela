Ext.define('Arbela.view.blades.TwoState', {
    extend: 'Arbela.view.api.Blade',

    statics: {
        niceName: 'Two-state',
        desc: 'Indicates two states (on/off) for a device'
    },

    settings: [{
        xtype: 'expressionfield',
        fieldLabel: 'State Expression',
        name: 'value1'
    }, {
        xtype: 'expressionfield',
        fieldLabel: 'Since Expression',
        name: 'value2'
    }],

    config: {
        height: 90,
        cls: 'cyanbg',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'component',
            flex: 1,
            bind: {
                html: '<div style="padding-left: 10px;padding-top: 20px;"><small>Current State</small><span class="bigtext">{value1}</span></div>'
            }
        }, {
            xtype: 'component',
            flex: 1,
            bind: {
                html: '<div style="padding-left: 10px;padding-top: 20px;"><small>Since</small><span class="bigtext">{value2}</span></div>'
            }
        }]
    },
    setBladeData: function(dataCfg) {
        console.log('=====> SETTING BLADE DATA <====== ', dataCfg);
        this.getViewModel().setData(dataCfg);
    }
});