
.PHONY: install
install:
	@npm install
	@npx lerna bootstrap


.PHONY: start-server
start-server:
	@cd packages/server && docker-compose up
