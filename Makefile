install:
		sudo npm ci
brain-games:
		node bin/brain-games.js
calculator:
		node bin/brain-calc.js
even:
		node bin/brain-even.js
gcd:
		node bin/brain-gcd.js
prime:
		node bin/brain-prime.js
progression:
		node bin/brain-progression.js
publish:
		npm publish --dry-run
lint:
		npx eslint .