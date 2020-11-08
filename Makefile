# ------------------------------------------------------------------------------
#  Globabls
# ------------------------------------------------------------------------------
CONTAINER_NAME:=zmwieand.github.io
TAG:=latest

# ------------------------------------------------------------------------------
#  Developer Commands
# ------------------------------------------------------------------------------
.PHONY: build
build:
	docker build -t $(CONTAINER_NAME):$(TAG) .

.PHONY: run
run:
	docker run \
		-p 3000:3000 \
		-v $(shell pwd)/src:/app/src \
		-v $(shell pwd)/public:/app/public \
		-it $(CONTAINER_NAME):$(TAG) \
		npm run start

.PHONY: lock
lock:
	docker run \
		-v $(shell pwd)/package.json:/app/package.json \
		-v $(shell pwd)/package-lock.json:/app/package-lock.json \
		-it $(CONTAINER_NAME):$(TAG) \
		npm install

# ------------------------------------------------------------------------------
#  Deployment Commands
# ------------------------------------------------------------------------------
.PHONY: bundle
bundle:
	docker run \
		-v $(shell pwd):/app \
		-it $(CONTAINER_NAME):$(TAG) \
		npm run build

.PHONY: deploy
deploy:
	docker run \
		-v $(shell pwd):/app \
		-it $(CONTAINER_NAME):$(TAG) \
		npm run deploy
