ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){

    List.Contact = Marionette.ItemView.extend({
        tagname: 'li',
        template: '#contact-list-item'
    });

    List.Contacts = Marionette.CollectionView.extend({
        tagname: 'ul',
        itemView: List.Contact
    });
});

