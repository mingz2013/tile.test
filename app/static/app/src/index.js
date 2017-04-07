/**
 * Created by zhaojm on 07/04/2017.
 */

let $ = require('jQuery');
window.$ = $;

import '../css/base.css'
import '../css/1.css'

import controllers from './controllers'

window.onload = () => {
    console.log("onload..");
    controllers.init();
};

$('#gameId').change(() => {
    console.log("gameid change..");
    let gameid = $('#gameId').val();
    controllers.init_play_mode_select(gameid);
});

$('#playMode').change(()=> {

});