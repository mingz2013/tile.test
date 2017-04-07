# -*- coding:utf-8 -*-
'''
Created on 07/04/2017

@author: zhaojingming@tuyoogame.com
'''

from flask import Blueprint, jsonify

from app.core import tile_test_config

api = Blueprint('tile_controller', __name__, url_prefix='/tile')


@api.route('/', methods=['GET'])
def index():
    return "api index"


@api.route('/game_id_list', methods=['GET'])
def get_game_id_list():
    game_id_list = tile_test_config.get_game_id_list()
    return jsonify(game_id_list)


@api.route('/play_mode_list/<game_id>', methods=['GET'])
def get_play_mode_list(game_id):
    play_mode_list = tile_test_config.get_play_mode_list_by_game_id(game_id)
    return jsonify(play_mode_list)


@api.route('/templ/<templ_name>', methods=['GET'])
def get_templ_by_name(templ_name):
    templ = tile_test_config.get_templ_by_templ_name(templ_name)
    return jsonify(templ)
