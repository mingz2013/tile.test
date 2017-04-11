/**
 * Created by zhaojm on 11/04/2017.
 */
import dispatcher from '../dispatcher'
import event_type from '../event_type'

let game_id_select_view = (game_id_list) => {
    return game_id_list.map((game_id)=>`<option value="${game_id}">${game_id}</option>`).join('');
};
let play_mode_select_view = (play_mode_list) => {
    return play_mode_list.map((play_mode)=>`<option value="${play_mode.templ}">${play_mode.desc}</option>`).join('');
};

let render_game_id_select_view = (game_id_list) => {
    $('#gameId').html(game_id_select_view(game_id_list));
    let gameid = $('#gameId').val();
    dispatcher.dispatch_event(event_type.view_game_id_changed, gameid);
};

let render_play_mode_select_view = (play_mode_list) => {
    $('#playMode').html(play_mode_select_view(play_mode_list));
    let templ = $('#playMode').val();
    dispatcher.dispatch_event(event_type.view_play_mode_changed, templ);
};

let on_model_game_id_list_changed = (game_id_list)=> {
    //console.log(game_id_list);
    render_game_id_select_view(game_id_list);

};

let on_model_play_mode_list_changed = (play_mode_list)=> {
    //console.log(play_mode_list);
    render_play_mode_select_view(play_mode_list);

};

let init = () => {
    dispatcher.add_listener(event_type.model_game_id_list_changed, on_model_game_id_list_changed);
    dispatcher.add_listener(event_type.model_play_mode_list_changed, on_model_play_mode_list_changed);
};


export default {
    init
}