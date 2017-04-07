/**
 * Created by zhaojm on 07/04/2017.
 */




const game_id_select_view = (game_id_list) => {
    return game_id_list.map((game_id)=>`<option value="${game_id}">${game_id}</option>`).join('')
};
const play_mode_select_view = (play_mode_list) => {
    return play_mode_list.map((play_mode)=>`<option value="${play_mode.templ}">${play_mode.desc}</option>`).join('')
};


export default {

    game_id_select_view,
    play_mode_select_view
}