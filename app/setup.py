#!/usr/bin/env python

import os
import sys

basedir = os.path.dirname(os.path.abspath(__file__))
source_dir = os.path.join(basedir, "../")
# sys.path.append(os.path.join(source_path, "difang/src/"))
# sys.path.append(os.path.dirname(os.path.abspath(__file__)))
# sys.path.append(os.path.abspath('.'))
sys.path.append(source_dir)
print source_dir

if __name__ == '__main__':
    from utils.default_encoding import init_encoding

    init_encoding()

    # from app import Server
    # from webapp import webapp
    #
    # print "run on 0.0.0.0:5000"
    # Server().run(webapp, host="0.0.0.0", port=5000, reload=True)
    from app import webapp

    webapp.run(host='127.0.0.1', port=5000)
