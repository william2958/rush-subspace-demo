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

Run `rush deploy -p packageA` to deploy package