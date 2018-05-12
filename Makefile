
include utils/help.mk

.DEFAULT_GOAL := help


.PHONY: install
install: ##@Installation Install all the projects dependencies
	@npm install
	@npx lerna bootstrap


.PHONY: server-start
server-start: ##@Server Start the development server of the MapContrib server
	@cd packages/server && docker-compose up

.PHONY: web-start
web-start: ##@Web Start the development server of the MapContrib web client
	@cd packages/web && npm start


.PHONY: server-ci
server-ci: ##@Server Launch the CI tasks of the server
	@cd packages/server && npm run lint

.PHONY: web-ci
web-ci: ##@Web Launch the CI tasks of the web client
	@cd packages/web && npm run lint
	@cd packages/web && npm run test-prettier
	@cd packages/web && npm run test-ci && (cat ./coverage/lcov.info | npx coveralls)
	@cd packages/web && npm run build
