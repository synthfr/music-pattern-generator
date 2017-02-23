/**
 * Overview list of all assigned MIDI controller assignments.
 * @namespace WH
 */

window.WH = window.WH || {};

(function (ns) {
    
    function createRemoteView(specs, my) {
        var that,
            midiRemote = specs.midiRemote,
            rootEl = document.querySelector('#remote'),
            listEl = document.querySelector('.remote__list'),
            groupViews = [],
            
            createRemoteGroup = function(processor) {
                var remoteGroupView = ns.createRemoteGroupView({
                    processor: processor,
                    parentEl: listEl
                });
                groupViews.push(remoteGroupView);
            },
            
            deleteRemoteGroup = function(processor) {
                var n = groupViews.length;
                while (--n >= 0) {
                    if (groupViews[n].hasProcessor(processor)) {
                        groupViews[n].terminate();
                        groupViews.splice(n, 1);
                        return false;
                    }
                }
            },
            
            toggleVisibility = function(isVisible) {
                rootEl.style.display = isVisible ? 'block' : 'none';
            };
        
        that = specs.that || {};
        
        that.createRemoteGroup = createRemoteGroup;
        that.deleteRemoteGroup = deleteRemoteGroup;
        that.toggleVisibility = toggleVisibility;
        return that;
    }

    ns.createRemoteView = createRemoteView;

})(WH);