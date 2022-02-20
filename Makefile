install: 
	npm ci
	npm link

run:
	bin/nodejs-package.js 10

lint:
	npx eslint .

publish:
	npm publish --dry-run
 with:
    debug: true
test-coverage:
 	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage
test-watch:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest