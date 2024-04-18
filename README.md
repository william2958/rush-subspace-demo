Dependency relations

Default subspace:
- packageA
- libA

subspace-b:
- packageB
- libB

Dependencies:
- packageA depends on libB
- packageB depends on libA

pnpmfile
- subspace-b has a .pnpmfile-subspace.cjs that re-writes libB's lodash dependency to version 4.17.20

Run `rush deploy -p packageA` to deploy package