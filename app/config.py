# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

import os
import sys

basedir = os.path.dirname(os.path.abspath(__file__))
source_dir = os.path.join(basedir, "../")


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'hard to guess string'

    # MONGODB_DB = 'chat'

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    pass


class TestingConfig(Config):
    TESTING = True
    pass


class ProductionConfig(Config):
    DEBUG = False
    pass


config_dict = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,

    'default': DevelopmentConfig
}
