Ext.define('Arbela.view.cards.OpenWeatherMapTemp', {
    requires: [

        'Ext.Component'
    ],
    extend: 'Arbela.view.api.Card',
    alias: 'part.weather',

    viewTemplate: {
        // header: false,
        // layout: {
        //     type: 'vbox',
        //     align: 'stretch'
        // },
        title: 'Weather (Temperature)',
        // height: 90,
        items: [{
            xtype: 'container',
            cls: 'cyanbg',
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
                values: []
            }, {
                xtype: 'component',
                viewModel: {
                    area: "-",
                    temp: "-"
                },
                flex: 1,
                bind: {
                    html: '<div style="padding-left: 10px;padding-top: 20px;"><small>{area}</small><span class="bigtext">{temp}&deg;C</span></div>'
                },
                afterRender: function(ct) {
                    console.log('afterRender: component');

                    //first time call
                    myTimer();

                    //subsequent calls are every 60 seconds
                    var myVar = setInterval(myTimer, 60000);
                    var me = this;

                    function showPosition(position) {
                        var lat = position.coords.latitude;
                        var lng = position.coords.longitude;

                        Ext.data.JsonP.request({
                            url: "http://api.openweathermap.org/data/2.5/weather?APPID=4216a168535c1028fd4683e854ffb5f2&units=metric&lat=" + lat + "&lon=" + lng,
                            success: function(response) {
                                // console.log("Weather Data: ", response);
                                me.getViewModel().setData({
                                    area: response.name,
                                    temp: response.main.temp
                                });

                                //get the forecast
                                Ext.data.JsonP.request({
                                    url: "http://api.openweathermap.org/data/2.5/forecast?APPID=4216a168535c1028fd4683e854ffb5f2&units=metric&lat=" + lat + "&lon=" + lng,
                                    success: function(response) {
                                        // console.log('FORECAST: ', response);
                                        var list = response.list;
                                        var l = list.length;
                                        var values = [];
                                        for (var i = 0; i < l; i++) {
                                            values.push(list[i].main.temp);
                                        }
                                        me.up("container").down("sparklineline").setValues(values);
                                    },
                                    error: function() {
                                        console.log("Failed to get forecast data! Will try again after sometime!");
                                    }
                                });
                            },
                            error: function() {
                                console.log("Failed to get weather data! Will try again after sometime!");    
                            }
                        });

                    }

                    function myTimer() {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(showPosition);
                        } else {
                            console.log('Failed to get location!');
                        }
                    }
                }
            }]
        }],
        tools: []
    }
});