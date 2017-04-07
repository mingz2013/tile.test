/**
 * Created by zhaojm on 07/04/2017.
 */

const title_view = () => {
    return `<div align='center' style='padding-top: 0.5cm'>
        <h1> 摆牌 </h1>
        </div>`;
};

const select_view = () => {
    return `<div>
        gameId: <select id='gameId'>
        </select>
        PlayMode: <select id='playMode'>
        </select>
        </div>
        <hr/>`;
};

const game_id_select_view = (game_id_list) => {
    return game_id_list.map((game_id)=>`<option value="${game_id}">${game_id}</option>`).join('')
};
const play_mode_select_view = (play_mode_list) => {
    return play_mode_list.map((play_mode)=>`<option value="${play_mode.templ}">${play_mode.desc}</option>`).join('')
};


export default {
    title_view,
    select_view,
    game_id_select_view,
    play_mode_select_view
}