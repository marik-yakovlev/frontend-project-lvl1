install:
		sudo npm ci
brain-games:
		node bin/brain-progression.js
publish:
		npm publish --dry-run
lint:
		npx eslint .