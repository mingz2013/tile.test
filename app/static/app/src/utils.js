/**
 * Created by zhaojm on 07/04/2017.
 */

let $ = require('jquery');

const insert_view_to_body = (sub_view) => {
    $('body').append(sub_view);
};

export default {
    insert_view_to_body
}