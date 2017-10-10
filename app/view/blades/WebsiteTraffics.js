Ext.define('Arbela.view.blades.WebsiteTraffics', {
    requires: [

        'Ext.sparkline.Bar',
        'Ext.Component'
    ],
    extend: 'Arbela.view.api.Blade',

    statics: {
        niceName: 'Website Traffics',
        desc: 'Shows month wise traffic and the total traffic as on today'
    },

    settings: [{
        xtype: 'textfield',
        fieldLabel: 'Month-wise Traffic Data',
        name: 'value1',
        processRawValue: function(rawValue) {
            console.log('===>>> processRawValue called: ', rawValue.split(','));
            return rawValue.split(',');
        }
    }, {
        // xtype: 'calculatedfield',
        xtype: 'textfield',
        fieldLabel: 'Total hits',
        name: 'value2'
    }],

    config: {
        height: 90,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        cls: 'cyanbg',
        items: [{
            xtype: 'sparklinebar',
            barColor: '#FFFFFF',
            margin: 20,
            height: 50,
            width: 90,
            values: [] //[2, 4, 6, -3, 7, 10, 3, 5, 9, 2, 4, 6, -3, 7, 10, 3, 5, 9]
        }, {
            xtype: 'component',
            flex: 1,
            bind: {
                html: '<div style="padding-left: 10px;padding-top: 20px;"><small>Website Traffics</small><span class="bigtext">{value2}</span></div>'
            }
        }]
    },
    setBladeData: function(dataCfg) {
        console.log('=====> SETTING BLADE DATA <====== ', dataCfg);
        this.down('sparklinebar').setValues(dataCfg.value1);
    }
});