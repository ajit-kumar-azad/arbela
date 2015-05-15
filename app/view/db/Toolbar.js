/*
 * File: app/view/db/Toolbar.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Arbela.view.db.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.dbtoolbar',

    requires: [
        'Arbela.view.db.ToolbarViewModel',
        'Arbela.view.db.ToolbarViewController',
        'Ext.button.Button'
    ],

    controller: 'dbtoolbar',
    viewModel: {
        type: 'dbtoolbar'
    },

    items: [
        {
            xtype: 'button',
            text: 'Add Card',
            listeners: {
                click: 'onAddCardBtnClick'
            }
        },
        {
            xtype: 'button',
            text: 'Clone',
            listeners: {
                click: 'onCloneBtnClick'
            }
        }
    ]

});