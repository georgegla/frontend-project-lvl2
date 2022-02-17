install: 
	npm ci
	npm link

run:
	bin/nodejs-package.js 10

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish
 with:
    coverageCommand: make test-coverage
    debug: true