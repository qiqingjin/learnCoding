require([
    'dojo/dom',
    'dojo/fx',
    'dijit/form/CheckBox',

    'dojo/domReady!'
], function (dom, fx, CheckBox) {
    /**
     * get start with dojo
     */
    // The piece we had before...
    var greeting = dom.byId('greeting');
    greeting.innerHTML += ' from Dojo!';

    // ...but now, with an animation!
    fx.slideTo({
        node: greeting,
        top: 100,
        left: 200
    }).play();

    /**
     * build a checkbox
     */
    var box1 = new CheckBox({
      id: "pbox1",
      checked: true
    });
    box1.placeAt("pbox1_container", "first");
});