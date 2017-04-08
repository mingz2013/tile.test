/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里注册需要修改界面的事件, 根据数据去修改界面
 *
 */


import dispatcher from './dispatcher'
import event_type from './event_type'
import models from './models'



// components
let game_id_select_view = (game_id_list) => {
    return game_id_list.map((game_id)=>`<option value="${game_id}">${game_id}</option>`).join('');
};
let play_mode_select_view = (play_mode_list) => {
    return play_mode_list.map((play_mode)=>`<option value="${play_mode.templ}">${play_mode.desc}</option>`).join('');
};

let tile_view = (tile, num) => {
    return `<div class="tile"><img src="${imagesReq('./' + tile + '.png')}" class="tile"/><span>${num}</span></div>`
};

let tile_pool_view = (tiles) => {
    return tiles.map((color)=> {
        return color.map((tile) => tile_view(tile, 4)).join('');
    }).join('<br/>');
};


// renders
let render_game_id_select_view = () => {
    $('#gameId').html(game_id_select_view(models.get_game_id_list()));
    dispatcher.dispatch_event(event_type.game_id_changed);
};

let render_play_mode_select_view = () => {
    $('#playMode').html(play_mode_select_view(models.get_play_mode_list()));
    dispatcher.dispatch_event(event_type.play_mode_changed);
};

let render_tile_pool_view = () => {
    $('#tilePool').html(tile_pool_view(models.get_tile_pool()));
};


// events
let on_game_id_list_changed = ()=> {
    render_game_id_select_view();

};
let on_play_mode_list_changed = ()=> {
    render_play_mode_select_view();

};

let on_templ_changed = ()=> {
    // TODO 显示下面的页面
    console.log("on_templ changed...");
    render_tile_pool_view();
};


let init = () => {

    dispatcher.add_listener(event_type.game_id_list_changed, on_game_id_list_changed);
    dispatcher.add_listener(event_type.play_mode_list_changed, on_play_mode_list_changed);
    dispatcher.add_listener(event_type.templ_changed, on_templ_changed);
};


export default {
    init

}