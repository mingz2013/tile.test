/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里注册需要修改界面的事件, 根据数据去修改界面
 *
 */


import dispatcher from './dispatcher'
import event_type from './event_type'


let game_id_select_view = (game_id_list) => {
    return game_id_list.map((game_id)=>`<option value="${game_id}">${game_id}</option>`).join('')
};
let play_mode_select_view = (play_mode_list) => {
    return play_mode_list.map((play_mode)=>`<option value="${play_mode.templ}">${play_mode.desc}</option>`).join('')
};


let on_game_id_list_changed = ()=> {
    $('#gameId').html(game_id_select_view(data));
    let gameid = $('#gameId').val();
};
let on_play_mode_list_changed = ()=> {
    $('#playMode').html(play_mode_select_view(data));
    let templ = $('#playMode').val();

};
let on_templ_changed = ()=> {

};

let init = () => {


    dispatcher.addListener(event_type.game_id_list_changed, on_game_id_list_changed);
    dispatcher.addListener(event_type.play_mode_list_changed, on_play_mode_list_changed);
    dispatcher.addListener(event_type.templ_changed, on_templ_changed);
};


export default {
    init

}