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


export default {
    title_view,
    select_view
}