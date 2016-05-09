Ext.define('Arbela.view.db.main.Dashboard', {
    extend: 'Ext.dashboard.Dashboard',
    alias: 'widget.dbdashboard',

    requires: [
        'Arbela.view.db.main.DashboardViewModel',
        'Arbela.view.db.main.DashboardViewController',
        'Arbela.view.db.tb.Toolbar',
        'Arbela.view.cards.CurrentTime',
        'Arbela.view.cards.OpenWeatherMapTemp',
        'Arbela.view.cards.OpenWeatherMapHumidity'
    ],

    controller: 'dbdashboard',
    viewModel: {
        type: 'dbdashboard'
    },
    config: {
        title: 'My Dashboard',
        scrollable: true,
        maxColumns: 3,
        // closable: true,
        // columnWidths: [0.25, 0.25, 0.25],
        parts: {
            'card': 'card',
            'currenttime': 'currenttime',
            'weather': 'weather',
            'humidity': 'humidity'
        },
        datasources: null

    },
    ui: 'navigation',

    applyDatasources: function(dses) {
        console.log('Dashboard: dses=>', dses);
        return dses;
    },

    defaultContent: [{
        type: 'currenttime',
        columnIndex: 0,
        height: 130
    }, {
        type: 'weather',
        columnIndex: 1,
        height: 130
    }, {
        type: 'humidity',
        columnIndex: 2,
        height: 130
    }],

    tbar: {
        xtype: 'dbtoolbar',
        dock: 'top',
        listeners: {
            addcard: 'onToolbarAddcard',
            clonedashboard: 'onToolbarClonedashboard',
            removedashboard: 'onRemoveDashboard'
        }
    },

    afterRender: function() {
        this.callParent(arguments);

        var editor = new Ext.Editor({
            updateEl: true,
            alignment: 'l-l',
            autoSize: {
                width: 'boundEl'
            },
            field: {
                xtype: 'textfield'
            }
        });

    }

});