/**
 * Created by zhaojm on 07/04/2017.
 */

let $ = require('jQuery');
window.$ = $;

import '../css/base.css'
import '../css/1.css'

import controllers from './controllers'
import dispatcher from './dispatcher'
import constants from './constants'

import views from './views'
//import utils from './utils'
import apis from './apis'

window.onload = () => {
    console.log("onload..");
    controllers.init();
    dispatcher.dispatchEvent(constants.window_load);
};

$('#gameId').change(() => {
    console.log("gameid change..");
    let gameid = $('#gameId').val();
    apis.get_play_mode_list_by_game_id(game_id, (data) => {


    });
});

$('#playMode').change(()=> {

});



