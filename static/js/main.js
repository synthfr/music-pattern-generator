/**
 * @description Euclidean Pattern Generator
 * @author Wouter Hisschemöller
 * @version 0.0.0
 */

'use strict';

/**
 * Application startup.
 */
document.addEventListener('DOMContentLoaded', function(e) {
    
    // Create all objects that will be the modules of the app.
    var appView = {},
        epgControls = {},
        epgPreferences = {},
        remoteView = {},
        file = {},
        midi = {},
        midiRemote = {},
        midiNetwork = {},
        transport = {},
        world = {};
        
    WH.pubSub = WH.createPubSub();
    
    // Add functionality to the modules and inject dependencies.
    WH.createAppView({
        that: appView
    });
    WH.createEPGControls({
        that: epgControls,
        midiRemote: midiRemote,
        transport: transport
    });
    WH.createEPGPreferences({
        that: epgPreferences,
        midi: midi
    });
    WH.createRemoteView({
        that: remoteView,
        midiRemote: midiRemote
    });
    WH.createFile({
        that: file,
        midi: midi,
        transport: transport
    });
    WH.createMIDI({
        that: midi,
        app: app,
        epgControls: epgControls,
        epgPreferences: epgPreferences,
        midiRemote: midiRemote,
        transport: transport
    });
    WH.createMIDIRemote({
        that: midiRemote,
        remoteView: remoteView
    });
    WH.createMIDINetwork({
        that: midiNetwork,
        appView: appView,
        midiRemote: midiRemote,
        world: world
    });
    WH.createTransport({
        that: transport,
        midiNetwork: midiNetwork,
        world: world
    });
    WH.createWorld({
        that: world
    });
    
    // initialise
    midi.setup();
    world.setup();
    file.setup();
    transport.run();
});
