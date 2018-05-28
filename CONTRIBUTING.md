# Contribute


## Global tools

Some tools are required globally:

* Node.js, NPM
* Docker
* Docker Compose


## Makefile

As the whole project is splitted into several parts (server and web client so far) and technologies (JavaScript, Docker, etc.), the main commands are handled by a root Makefile.

You can display the full list of commands by typing:

```
$ make
```

Or:

```
$ make help
```


## Installation

```
$ git clone git@github.com:mapcontrib/mapcontrib.next.git
$ cd mapcontrib.next
$ make install
```


## Start

To start the whole project, create a new `.env` file and put your Oauth credentials in it:

```
$ cd packages/server
$ cp .env.sample .env
$ # Edit the .env file
```

Then, launch the general start command:

```
$ make start
```


## Server

The server part of MapContrib Next is based on [Loopback](https://loopback.io) and the source files are in the `packages/server` directory.

The related `make` commands are prefixed by `server-`.


## Web client

The web client part of MapContrib Next is based on [React](https://reactjs.org) and [OSM UI](https://github.com/osm-ui/react), the source files are in the `packages/web` directory.

The related `make` commands are prefixed by `web-`.


### Tests

```
$ make test-watch
```

Runs all the tests in watch mode and compute the coverage informations in real time. So you can use any coverage display plugin in your code editor in real time too.


## Release

```
$ git checkout develop
$ npm version prerelease -m "release: %s"
$ git checkout master
$ git merge develop
$ git push origin master
```

`npm version` tests the code and builds it. Then it upgrades the package version number according to the used keyword (patch, minor or major) and commits the modifications in Git (with a proper version tag). Finally, it pushes it to repository with the tag.
