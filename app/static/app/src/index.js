/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里处理系统事件,并通过事件分发器分发
 *
 *
 * 总体逻辑,flow data, 从界面加载事件开始,到下载数据,更新model,到更新界面,到触发界面事件,到下载数据,到更新model,到更新界面, 接下来触发事件
 *
 */

let $ = require('jQuery');
window.$ = $;
let imagesReq = require.context("../images", true, /^\.\/.*\.png$/);
window.imagesReq = imagesReq;

//import '../css/base.css'
//import '../css/1.css'
import '../css/style.css'


import controllers from './controllers'
import views from './views'
import models from './models'
import dispatcher from './dispatcher'
import event_type from './event_type'


window.onload = () => {

    $('#gameId').change(() => {
        dispatcher.dispatch_event(event_type.game_id_changed);
    });

    $('#playMode').change(()=> {
        dispatcher.dispatch_event(event_type.play_mode_changed);
    });

    models.init();
    controllers.init();
    views.init();


    // begin
    dispatcher.dispatch_event(event_type.window_load);
};




