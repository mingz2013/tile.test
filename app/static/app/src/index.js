/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里处理系统事件,并通过事件分发器分发
 *
 *
 * 总体逻辑,flow data, 从界面加载事件开始,到下载数据,更新model,到更新界面,到触发界面事件,到下载数据,到更新model,到更新界面, 接下来触发事件
 *
 * 鸭子模型,每一个模块,都有明确的输入输出,定义了这个模块的功能
 *
 */

let $ = window.$ = window.jQuery = require('jQuery');
let imagesReq = window.imagesReq = require.context("../images", true, /^\.\/.*\.png$/);
let bootstrap = require('bootstrap');

//import '../css/base.css'
//import '../css/1.css'
import '../css/style.css'

import net from './net'
import views from './views'
import models from './models'
import dispatcher from './dispatcher'
import event_type from './event_type'


window.onload = () => {


    $('#playMode').change(()=> {

    });

    models.init();
    net.init();
    views.init();


    // begin
    dispatcher.dispatch_event(event_type.view_window_load);
};




