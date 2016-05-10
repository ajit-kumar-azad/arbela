Ext.define('Arbela.view.cards.CurrentTime', {
    requires: [

        'Ext.Component'
    ],
    extend: 'Arbela.view.api.Card',
    alias: 'part.currenttime',

    viewTemplate: {
        // header: false,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        title: 'Current Time',
        // height: 90,
        items: [{
            xtype: 'container',
            cls: 'greenbg',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            viewModel: {
                date: null,
                time: null
            },
            items: [{
                xtype: 'component',
                width: 120,
                bind: {
                    html: '<div><div style="text-align:center;font-size=24px;"><p>{textday}</p></div><div style="text-align:center;font-size:48px;"><p style="margin-top: 0px;padding-top: 10px;">{numday}</p></div></div>'
                }

            },{
                xtype: 'component',
                flex: 1,
                bind: {
                    html: '<div style="padding-left:10px;padding-top:40px;" class="bigtext">{time}</div>'
                },
                afterRender: function() {
                    var myVar = setInterval(myTimer, 1000);
                    var me = this;

                    function myTimer() {
                        var d = new Date();
                        me.up("container").getViewModel().setData({
                            textday : Ext.Date.format(d,  "l"),
                            numday : Ext.Date.format(d,  "j"),
                            time : d.toLocaleTimeString()
                        });
                    }
                }
            }]
        }],
        tools: []
    }
});