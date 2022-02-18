install: 
	npm ci
	npm link

run:
	bin/nodejs-package.js 10

test:
	npm test
lint:
	npx eslint .

publish:
	npm publish --dry-run
 with:
    debug: true
test-coverage:
 	NODE_OPTIONS=--experimental-vm-modules npx jest --coverageъ
test-watch:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest