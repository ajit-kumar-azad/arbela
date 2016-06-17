Ext.define('Arbela.view.datasources.Dweetio', {
    extend: 'Arbela.view.api.DataSource',

    statics: {
        niceName: 'Dweet.io',
        desc: 'Connect using dweet.io REST services'
    },

    settings: [{
        xtype: 'textfield',
        fieldLabel: 'Thing Name',
        name: 'thingname'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Key',
        name: 'key'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Data refresh frequency',
        name: 'refreshfrequency',
        value: 5  //in seconds
    }],

    loadData: function() {
        var me = this;

        var params = me.getParams();
        var thingName = params.thingname;
        var key = params.key;

        var url = 'https://dweet.io/get/latest/dweet/for/' + thingName;
        if (key) {
            url += '?key=' + key;
        }

        Ext.Ajax.request({
            url: url,
            success: function(response){
                var data = Ext.JSON.decode(response.responseText);
                console.log('Got response: ', data);
                if (data["this"] === 'succeeded') {
                    me.setData(data['with'][0].content);
                }
            }
        });

        return me.data;
    }
});