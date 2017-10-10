Ext.define('Arbela.view.datasources.TimescaleDB', {
    extend: 'Arbela.view.api.DataSource',

    requires: ['Arbela.protocols.Websocket'],

    statics: {
        niceName: 'TimescaleDB Notifier',
        desc: 'Connect to TimescaleDB notifier'
    },

    settings: [{
        xtype: 'textfield',
        fieldLabel: 'URL',
        name: 'url'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Since',
        format: 'Y-m-d',
        name: 'since'
    }],

    loadData: function() {
        var me = this;

        var params = me.getParams();
        var url = params.url;
        var since = params.since;

        var dt = Date.parse();

        Arbela.protocols.Websocket.connect(url, params);

        Arbela.protocols.Websocket.subscribe(function(data) {
            me.setData(data);
        });

        return me.data;
    }
});