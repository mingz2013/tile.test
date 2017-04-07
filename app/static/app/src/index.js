/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里处理系统事件,并通过事件分发器分发
 *
 */

let $ = require('jQuery');
window.$ = $;

import '../css/base.css'
import '../css/1.css'

import controllers from './controllers'
import views from './views'
import dispatcher from './dispatcher'
import constants from './constants'



window.onload = () => {
    console.log("onload..");
    controllers.init();
    views.init();
    dispatcher.dispatchEvent(constants.window_load);
};

$('#gameId').change(() => {
    console.log("gameid change..");
    dispatcher.dispatchEvent(constants.game_id_changed);
});

$('#playMode').change(()=> {
    dispatcher.dispatchEvent(constants.play_mode_changed);
});



