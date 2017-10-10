Ext.define('Arbela.view.blades.CategorywiseFactTabular', {
    requires: [

        'Ext.grid.Panel'
    ],
    extend: 'Arbela.view.api.Blade',

    statics: {
        niceName: 'Categorywise Fact (Tabular)',
        desc: 'Shows the category wise fact value (e.g. rate wise total rides)'
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
            xtype: 'grid',
            columns: [
              { text: 'Description', dataIndex: 'description', flex: 1},
              { text: 'Value', dataIndex: 'val', renderer: function(val, metaData) {
                metaData.tdStyle = "font-weight:bold;";
                  return val;
              } }
            ],
            store: {
                fields: ['description', 'val'],
                data: []
            }
        }
    },
    setBladeData: function(dataCfg) {
        console.log('=====> SETTING BLADE DATA <====== ', dataCfg);
        if (dataCfg.dataArr && dataCfg.dataArr.length > 0) {
            this.down('grid').getStore().loadData(dataCfg.dataArr);
        }
    }
});