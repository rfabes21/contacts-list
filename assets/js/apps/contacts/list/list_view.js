ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){

    List.Contact = Marionette.ItemView.extend({
        tagName: 'tr',
        template: '#contact-list-item',

        events: {
            'click': 'highlightName'
        },

        highlightName: function(){
            this.$el.toggleClass('warning');
        },
    });

    List.Contacts = Marionette.CompositeView.extend({
        tagName: 'table',
        className: 'table table-hover',
        itemView: List.Contact,
        template: '#contact-list',
        itemViewContainer: 'tbody'
    });
});

