Ext.define('Arbela.view.blades.BooksList', {
    requires: [

        'Ext.view.View',
        'Ext.XTemplate',
        'Ext.scroll.Scroller'
    ],
    extend: 'Arbela.view.api.Blade',

    config: {
        height: 350,
        xtype: 'container',
        scrollable: true,
        bodyPadding: 5,
        items: {
            xtype: 'dataview',
            bodyPadding: 5,
           itemTpl: [
            '<div class="thumb-wrap">',
            '<img src="{imgurl}" height="80">',
            '<div class="detail">',
            '<span class="title">{title}</span></br>',
            '<span class="desc">{desc}</span><a class="readmore" href="{readmore}" target="_blank">Read more...</a></div>',
            '</div>'
           ],
            store: {
                storeId: 'books',
                autoLoad: true,
                fields: ['id', 'title', 'imgurl', 'desc'],
                proxy: {
                    type: 'ajax',
                    url: 'resources/data/senchabooks.json',
                    reader: {
                        rootProperty: 'books'
                    }
                }
            },
            itemSelector: 'div.thumb-wrap'
        }
    }
});