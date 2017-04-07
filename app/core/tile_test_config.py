# -*- coding:utf-8 -*-
'''
Created on 07/04/2017

@author: zhaojingming@tuyoogame.com
'''

import codecs
import json
import os

from app.config import source_dir

__config_path = os.path.join(source_dir, "app/tile.test.config/")


def __get_json_str_from_file(json_file):
    _file_path = os.path.join(__config_path, json_file)
    try:
        with codecs.open(_file_path, encoding='utf-8') as f:
            return f.read()
    except Exception, e:
        return None


def get_game_id_list():
    json_str = __get_json_str_from_file('0.json')
    return json_str


def get_play_mode_list_by_game_id(game_id):
    file_name = str(game_id) + '.json'
    json_str = __get_json_str_from_file(file_name)
    return json_str


def get_templ_by_templ_name(templ_name):
    file_name = str(templ_name) + '.json'
    json_str = __get_json_str_from_file('templ/' + file_name)
    return json_str
