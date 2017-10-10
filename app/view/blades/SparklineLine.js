Ext.define('Arbela.view.blades.SparklineLine', {
    extend: 'Arbela.view.api.Blade',

    statics: {
        niceName: 'Sparkline - Line',
        desc: 'Renders values as line sparkline'
    },

    settings: [{
        xtype: 'expressionfield',
        fieldLabel: 'Expression',
        name: 'value1'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Unit',
        name: 'value2'
    }],

    config: {
        height: 90,
        cls: 'orangebg',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'sparklineline',
            lineColor: '#ffffff',
            lineWidth: 1,
            margin: 20,
            height: 50,
            width: 90,
            name: 'sparkline',
            values: ['23', '27', '33']
        }, {
            xtype: 'component',
            flex: 1,
            bind: {
                html: '<div style="padding-left: 10px;padding-top: 20px;"><small>Current Value</small><span class="bigtext">{value1} {value2}</span></div>'
            }
        }]
    },
    setBladeData: function(dataCfg) {
        console.log('=====> SETTING BLADE DATA <====== ', dataCfg);
        var values = this.down('sparklineline').getValues();
        values.push(dataCfg.value1);
        console.log('BLADE VALUES: ', values);

        this.down('sparklineline').setValues(values);

        // this.down('sparklineline').setValues(dataCfg.value1);
        this.getViewModel().setData(dataCfg);
    }
});