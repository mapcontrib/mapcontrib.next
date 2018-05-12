
.PHONY: install
install:
	@npm install
	@npx lerna bootstrap


.PHONY: start-server
start-server:
	@cd packages/server && docker-compose up

.PHONY: start-web
start-web:
	@cd packages/web && npm start


.PHONY: ci-server
ci-server:
	@cd packages/server && npm run lint

.PHONY: ci-web
ci-web:
	@cd packages/web && npm run lint
	@cd packages/web && npm run test-prettier
	@cd packages/web && npm run test-ci && (cat ./coverage/lcov.info | npx coveralls)
	@cd packages/web && npm run build
