# Contribute

## Installation

```
$ git clone git@github.com:mapcontrib/mapcontrib.next.git
$ cd mapcontrib.next
$ npm install
```


## Development

### Tests

```
$ npm run test-watch
```


## Release

```
$ git checkout develop
$ npm version prerelease -m "release: %s"
$ git checkout master
$ git merge develop
$ git push origin master
```

`npm version` tests the code and builds it. Then it upgrades the package version number according to the used keyword (patch, minor or major) and commits the modifications in Git (with a proper version tag). Finally, it pushes it to repository with the tag.
