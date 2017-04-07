/**
 * Created by zhaojm on 07/04/2017.
 */


export default (()=> {

    let game_id_list = [];
    let play_mode_list = [];
    let templ = {};

    let get_game_id_list = () => {
        return game_id_list;
    };

    let set_game_id_list = (game_ids) => {
        game_id_list = game_ids;
    };

    let get_play_mode_list = ()=> {
        return play_mode_list;
    };
    let set_play_mode_list = (play_modes) => {
        play_mode_list = play_modes;
    };

    let get_templ = () => {
        return templ;
    };

    let set_templ = (t) => {
        templ = t;
    };


    return {
        get_game_id_list,
        set_game_id_list,
        get_play_mode_list,
        set_play_mode_list,
        get_templ,
        set_templ
    }


})();