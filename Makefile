
.PHONY: install
install:
	@npm install
	@npx lerna bootstrap


.PHONY: server-start
server-start:
	@cd packages/server && docker-compose up

.PHONY: web-start
web-start:
	@cd packages/web && npm start


.PHONY: server-ci
server-ci:
	@cd packages/server && npm run lint

.PHONY: web-ci
web-ci:
	@cd packages/web && npm run lint
	@cd packages/web && npm run test-prettier
	@cd packages/web && npm run test-ci && (cat ./coverage/lcov.info | npx coveralls)
	@cd packages/web && npm run build
