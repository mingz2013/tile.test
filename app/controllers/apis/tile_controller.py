# -*- coding:utf-8 -*-
'''
Created on 07/04/2017

@author: zhaojingming@tuyoogame.com
'''

from flask import Blueprint, render_template

api = Blueprint('tile_controller', __name__, url_prefix='/tile')


@api.route('/', methods=['GET'])
def index():
    print "index.."
    return render_template("index.html")
