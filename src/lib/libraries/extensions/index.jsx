import React from "react";
import { FormattedMessage } from "react-intl";

import musicIconURL from "./music/music.png";
import musicInsetIconURL from "./music/music-small.svg";

import penIconURL from "./pen/pen.png";
import penInsetIconURL from "./pen/pen-small.svg";

import videoSensingIconURL from "./videoSensing/video-sensing.png";
import videoSensingInsetIconURL from "./videoSensing/video-sensing-small.svg";

import text2speechIconURL from "./text2speech/text2speech.png";
import text2speechInsetIconURL from "./text2speech/text2speech-small.svg";

import translateIconURL from "./translate/translate.png";
import translateInsetIconURL from "./translate/translate-small.png";

import makeymakeyIconURL from "./makeymakey/makeymakey.png";
import makeymakeyInsetIconURL from "./makeymakey/makeymakey-small.svg";

import microbitIconURL from "./microbit/microbit.png";
import microbitInsetIconURL from "./microbit/microbit-small.svg";
import microbitConnectionIconURL from "./microbit/microbit-illustration.svg";
import microbitConnectionSmallIconURL from "./microbit/microbit-small.svg";

import ev3IconURL from "./ev3/ev3.png";
import ev3InsetIconURL from "./ev3/ev3-small.svg";
import ev3ConnectionIconURL from "./ev3/ev3-hub-illustration.svg";
import ev3ConnectionSmallIconURL from "./ev3/ev3-small.svg";

import wedo2IconURL from "./wedo2/wedo.png"; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from "./wedo2/wedo-small.svg";
import wedo2ConnectionIconURL from "./wedo2/wedo-illustration.svg";
import wedo2ConnectionSmallIconURL from "./wedo2/wedo-small.svg";
import wedo2ConnectionTipIconURL from "./wedo2/wedo-button-illustration.svg";

import boostIconURL from "./boost/boost.png";
import boostInsetIconURL from "./boost/boost-small.svg";
import boostConnectionIconURL from "./boost/boost-illustration.svg";
import boostConnectionSmallIconURL from "./boost/boost-small.svg";
import boostConnectionTipIconURL from "./boost/boost-button-illustration.svg";

import gdxforIconURL from "./gdxfor/gdxfor.png";
import gdxforInsetIconURL from "./gdxfor/gdxfor-small.svg";
import gdxforConnectionIconURL from "./gdxfor/gdxfor-illustration.svg";
import gdxforConnectionSmallIconURL from "./gdxfor/gdxfor-small.svg";

import meshIconURL from "./mesh/mesh.png";
import meshInsetIconURL from "./mesh/mesh-small.png";
import meshConnectionIconURL from "./mesh/mesh-illustration.png";
import meshConnectionSmallIconURL from "./mesh/mesh-small.png";

import smalrubotS1IconURL from "./smalrubot-s1/smalrubot-s1.png";
import smalrubotS1InsetIconURL from "./smalrubot-s1/smalrubot-s1-small.png";
import smalrubotS1ConnectionIconURL from "./smalrubot-s1/smalrubot-s1-illustration.png";
import smalrubotS1ConnectionSmallIconURL from "./smalrubot-s1/smalrubot-s1-small.png";



//import sampleIconURL from './sample/sample.png';
//import sampleInsetIconURL from './sample/sample-small.png';

import rubyclubIconURL from './rubyclub/rubyclub.png';
import rubyclubInsetIconURL from './rubyclub/rubyclub-small.png';

import kaniroboNormalIconURL from './kaniroboNormal/kaniroboNormal.png';
import kaniroboNormalInsetIconURL from './kaniroboNormal/kaniroboNormal-small.png';

import gpiohardIconURL from './gpiohard/gpiohard.png';
import gpiohardInsetIconURL from './gpiohard/gpiohard-small.png';

import i2cuartIconURL from './i2c_uart/i2c_uart.png';
import i2cuartInsetIconURL from './i2c_uart/i2c_uart-small.png';


const extensions = [
    // {
    //     name: (
    //         <FormattedMessage
    //             defaultMessage="mkmusic"
    //             description="Name for the 'mkmusic' extension"
    //             id="gui.extension.mkmusic.name"
    //         />
    //     ),
    //     extensionId: "mkmusic",
    //     iconURL: mkmusicIconURL,
    //     insetIconURL: mkmusicInsetIconURL,
    //     description: (
    //         <FormattedMessage
    //             defaultMessage="mkmusic blocks"
    //             description="mkmusic blocks for SmT"
    //             id="gui.extension.mkmusic.description"
    //         />
    //     ),
    //     featured: true,
    // },
    {
        name: (
            <FormattedMessage
                defaultMessage="rubyclub"
                description="Name for the 'rubyclub' extension"
                id="gui.extension.rubyclub.name"
            />
        ),
        extensionId: "rubyclub",
        iconURL: rubyclubIconURL,
        insetIconURL: rubyclubInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Rubyclub blocks"
                description="Rubyclub blocks for SmT"
                id="gui.extension.rubyclub.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="KaniroboNormal"
                description="Name for the 'kaniroboNormal' extension"
                id="gui.extension.kaniroboNormal.name"
            />
        ),
        extensionId: "kaniroboNormal",
        iconURL: kaniroboNormalIconURL,
        insetIconURL: kaniroboNormalInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="KaniroboNormal blocks"
                description="KaniroboNormal blocks for SmT"
                id="gui.extension.kaniroboNormal.description"
                      />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="GpioHard"
                description="Name for the 'GpioHard' extension"
                id="gui.extension.gpiohard.name"
            />
        ),
        extensionId: "gpiohard",
        iconURL: gpiohardIconURL,
        insetIconURL: gpiohardInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="GpioHard blocks"
                description="GpioHard blocks for SmT"
                id="gui.extension.gpiohard.description"
            />
        ),
        featured: true,



    },
    {
        name: (
            <FormattedMessage
                defaultMessage="I2C, UART"
                description="Name for the 'i2c_uart' extension"
                id="gui.extension.i2c_uart.name"
            />
        ),
        extensionId: "i2c_uart",
        iconURL: i2cuartIconURL,
        insetIconURL: i2cuartInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="I2C, UART blocks"
                description="i2c_uart blocks for SmT"
                id="gui.extension.i2c_uart.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Rubyclub"
                description="Name for the 'rubyclub' extension"
                id="gui.extension.rubyclub.name"
            />
        ),
        extensionId: "rubyclub",
        iconURL: rubyclubIconURL,
        insetIconURL: rubyclubInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Rubyclub blocks"
                description="Rubyclub blocks for SmT"
                id="gui.extension.rubyclub.description"
            />
        ),
        featured: true,
    },
    {
       name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: "music",
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: "pen",
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: "videoSensing",
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: "text2speech",
        collaborator: "Amazon Web Services",
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: "translate",
        collaborator: "Google",
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
    },
    {
        name: "Makey Makey",
        extensionId: "makeymakey",
        collaborator: "JoyLabz",
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true,
    },
    {
        name: "micro:bit",
        extensionId: "microbit",
        collaborator: "micro:bit",
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: "https://scratch.mit.edu/microbit",
    },
    {
        name: "LEGO MINDSTORMS EV3",
        extensionId: "ev3",
        collaborator: "LEGO",
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: "https://scratch.mit.edu/ev3",
    },
    {
        name: "LEGO BOOST",
        extensionId: "boost",
        collaborator: "LEGO",
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: "https://scratch.mit.edu/boost",
    },
    {
        name: "LEGO Education WeDo 2.0",
        extensionId: "wedo2",
        collaborator: "LEGO",
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: "https://scratch.mit.edu/wedo",
    },
    {
        name: "Go Direct Force & Acceleration",
        extensionId: "gdxfor",
        collaborator: "Vernier",
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: "https://scratch.mit.edu/vernier",
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Mesh"
                description="Name for the 'Mesh' extension"
                id="gui.smalruby3.extension.mesh.name"
            />
        ),
        extensionId: "mesh",
        iconURL: meshIconURL,
        insetIconURL: meshInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Allowing users to interact over a computer network."
                description="Description for the 'Mesh' extension"
                id="gui.smalruby3.extension.mesh.description"
            />
        ),
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: meshConnectionIconURL,
        connectionSmallIconURL: meshConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to Mesh network."
                id="gui.smalruby3.extension.mesh.connectingMessage"
            />
        ),
        helpLink: "https://github.com/smalruby/smalruby3-gui/wiki/Mesh",
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Smalrubot S1"
                description="Name for the 'Smalrubot S1' extension"
                id="gui.smalruby3.extension.smalrubotS1.name"
            />
        ),
        extensionId: "smalrubotS1",
        iconURL: smalrubotS1IconURL,
        insetIconURL: smalrubotS1InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Control the Smalrubot S1."
                description="Description for the 'Smalrubot S1' extension"
                id="gui.smalruby3.extension.smalrubotS1.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: smalrubotS1ConnectionIconURL,
        connectionSmallIconURL: smalrubotS1ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their Smalrubot S1."
                id="gui.smalruby3.extension.smalrubotS1.connectingMessage"
            />
        ),
        helpLink: "https://github.com/smalruby/smalruby3-gui/wiki/SmalrubotS1",
    },
];

// Injected for extra extensions
import microbitMore from "./microbitMore/entry.jsx";
extensions.push(microbitMore);

export default extensions;
