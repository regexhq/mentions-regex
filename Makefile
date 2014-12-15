# Makefile <https://github.com/tunnckoCore/dotfiles>
#
# Copyright (c) 2014 Charlike Mike Reagent, contributors.
# Released under the MIT license.
#

MOCHA = node_modules/.bin/mocha

test: 
	npm install
	${MOCHA}

clean:
	rm -rf node_modules

.PHONY: test clean
