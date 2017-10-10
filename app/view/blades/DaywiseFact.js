Ext.define('Arbela.view.blades.DaywiseFact', {
    requires: [

        'Ext.chart.series.Bar'
    ],
    extend: 'Arbela.view.api.Blade',

    statics: {
        niceName: 'Daywise Fact (Chart)',
        desc: 'Shows the daywise fact value (e.g. Day-wise average rate'
    },

    settings: [{
        xtype: 'expressionfield',
        fieldLabel: 'Data expression',
        name: 'dataArr'
    }],

    config: {
        height: 350,
        xtype: 'container',
        layout: 'fit',
        scrollable: true,
        bodyPadding: 5,
        items: {
            xtype: 'cartesian',
            store: {
                fields: ['day', 'val'],
                data: [
                  { day: '2016-01-01T08:00:00.000Z', val: '3.3990821679715529' },
                  { day: '2016-01-02T08:00:00.000Z', val: '3.0224687415181399' },
                  { day: '2016-01-03T08:00:00.000Z', val: '8.5382068607068607' },
                  { day: '2016-01-04T08:00:00.000Z', val: '9.9618895561740149' },
                  { day: '2016-01-05T08:00:00.000Z', val: '11.6614611935518309' },
                  { day: '2016-01-06T08:00:00.000Z', val: '10.5775245695086098' },
                  { day: '2016-01-07T08:00:00.000Z', val: '8.5868802584437019' }]
            },
            axes: [{
               type: 'numeric',
               position: 'left',
               title: {
                   text: 'Value',
                   fontSize: 15
               },
               fields: 'val'
           }, {
               type: 'category',
               position: 'bottom',
               title: {
                   text: 'Days',
                   fontSize: 15
               },
               fields: 'day',
               renderer: function(label) {
                    var dt = new Date(label);
                    return Ext.Date.format(dt, "Y-m-d");
               }
           }],
           series: {
               type: 'bar',
               subStyle: {
                   fill: ['#388FAD'],
                   stroke: '#1F6D91'
               },
               xField: 'day',
               yField: 'val',
               marker: true,
               tooltip: {
                    trackMouse: true,
                    renderer: function(item, tip) {
                        this.setHtml('COUNT: ' + item.get('val'));
                    }
                }
           }
        }
    },
    setBladeData: function(dataCfg) {
        console.log('=====> SETTING BLADE DATA <====== ', dataCfg);
        if (dataCfg.dataArr && dataCfg.dataArr.length > 0) {
            this.down('cartesian').getStore().loadData(dataCfg.dataArr);
        }
    }
});