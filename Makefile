
include utils/help.mk

.DEFAULT_GOAL := help


.PHONY: install
install: ##@General Install all the projects dependencies
	@npm install
	@npx lerna bootstrap



.PHONY: start
start: ##@General Start the development server of MapContrib (web client + server)
	@docker-compose up

.PHONY: server-start
server-start: ##@Server Start the development server of the MapContrib server
	@cd packages/server && docker-compose up

.PHONY: web-start
web-start: ##@Web Start the development server of the MapContrib web client
	@cd packages/web && npm start



.PHONY: server-lint
server-lint: ##@Server Lint the server source files
	@cd packages/server && npm run lint

.PHONY: server-nsp
server-nsp: ##@Server Look for security breaches in the server
	@cd packages/server && npm run nsp



.PHONY: web-lint
web-lint: ##@Web Lint the web client source files
	@cd packages/web && npm run lint

.PHONY: web-test-ci
web-test-ci: ##@Web Launch the web client tests in CI mode
	@cd packages/web && npm run test-ci

.PHONY: web-test-watch
web-test-watch: ##@Web Launch the web client tests in watch mode
	@cd packages/web && npm run test-watch

.PHONY: web-test-format
web-test-format: ##@Web Check if the web client source files are well formatted
	@cd packages/web && npm run test-format



.PHONY: web-build
web-build: ##@Web Create a production build of the web client
	@cd packages/web && npm run build



.PHONY: pre-commit
pre-commit: ##@Other Launch the pre-commit tasks
	@echo "${YELLOW}Server pre-commit tasks:${RESET}"
	@$(MAKE) --no-print-directory server-lint
	@$(MAKE) --no-print-directory server-nsp
	@echo
	@echo "${YELLOW}Web client pre-commit tasks:${RESET}"
	@cd packages/web && npm run pre-commit



.PHONY: server-ci
server-ci: ##@Server Launch the CI tasks of the server
	@$(MAKE) --no-print-directory server-lint
	# @$(MAKE) --no-print-directory server-nsp

.PHONY: web-ci
web-ci: ##@Web Launch the CI tasks of the web client
	@$(MAKE) --no-print-directory web-lint
	@$(MAKE) --no-print-directory web-test-format
	@$(MAKE) --no-print-directory web-test-ci && (cd packages/web && cat ./coverage/lcov.info | npx coveralls)
	@$(MAKE) --no-print-directory web-build
