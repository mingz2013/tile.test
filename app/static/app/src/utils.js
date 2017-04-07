/**
 * Created by zhaojm on 07/04/2017.
 */

import jQuery from 'jquery'

const $ = jQuery.$;

const insert_view_to_body = (sub_view) => {
    $.body.innerHTML(sub_view);
};

export default {
    insert_view_to_body
}