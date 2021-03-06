Ext.define('Arbela.view.ds.ListViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dslist',

    onAddBtnClick: function(button, e, eOpts) {
        this.showWindow();
    },

    showWindow: function(data) {
        var v = this.getView();

        //TODO: move this to a common util as it is used for Datasource as well as Card/Blade
        var classes = Ext.ClassManager.classes;
        var dses = [];

        for (var key in classes) {
            if (classes.hasOwnProperty(key)) {
                if (Ext.String.startsWith(key, 'Arbela.view.datasources')) {
                    var arr = key.split('.');
                    // dses.push([key, arr[arr.length - 1]]);
                    dses.push({
                        klass: key, 
                        name: arr[arr.length - 1],
                        niceName: classes[key].niceName
                    });
                }
            }
        }

        console.log('DATA: ', dses);

        var win = Ext.create('Arbela.view.ds.add.NewWindow', {
            title: 'New Datasource',
            y: 0,
            typeData: dses,
            values: data,
            listeners: {
                adddatasource: function(win, values) {
                    v.getStore().add(values);
                    v.fireEvent('addeddatasource', v, values);
                },
                single: true
            }
        });

        return win;
    },

    onRemoveDatasource: function(grid, rowIdx, colIdx) {
        grid.getStore().removeAt(rowIdx);
    },

    onRefreshDatasource: function(grid, rowIdx, colIdx) {
        var rec = grid.getStore().getAt(rowIdx);

        rec.data.typeObj.refresh();
    },

    onEdtiableCellClick: function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {

        if (e.target.className == "editable-link") {

            e.preventDefault();
            var win = this.showWindow();
            win.setValues(record);            
        }

    }

});
