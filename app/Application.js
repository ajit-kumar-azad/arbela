/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Arbela.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Arbela',

    requires: [
        'Arbela.view.datasources.Dummy',
        'Arbela.view.datasources.Sales',
        'Arbela.view.common.CalculatedField',
        'Arbela.view.common.ExpressionField',
        'Arbela.view.common.ExprParser',
        'Arbela.view.datasources.Dweetio',
        'Arbela.protocols.MQTT',
        'Arbela.view.datasources.MQTT',
        'Arbela.view.datasources.PubNub'
    ],
    views: [
        'MyViewport',
        'db.tb.Toolbar',
        'ws.Toolbar',
        'ws.Workspace',
        'db.main.Dashboard',
        'ds.List',
        'ds.add.NewWindow',
        'common.WindowToolbar',
        'db.card.NewCard',
        'api.Card',
        'blades.Dummy',
        'blades.TotalSales',
        'blades.WebsiteTraffics',
        'blades.SupportTickets',
        'blades.BooksList',
        'blades.InventoryChart',
        'blades.SparklineLine',
        'blades.TwoState',
        'cards.CurrentTime',
        'cards.OpenWeatherMapTemp',
        'cards.OpenWeatherMapHumidity'
    ],


    launch: function () {
        // TODO - Launch the application
    }
});
