
ESLINT         = ./node_modules/.bin/eslint
ESLINT_FLAGS   = --config eslint/eslint.json



grade:
	stable

eslint: FORCE
	$(ESLINT) $(ESLINT_FLAGS) ./src

install: snap
	cd snapcraft && snap install throttle_* --force-dangerous && cd ..

snap: FORCE
	cd snapcraft && snapcraft clean && snapcraft snap && cd ..

test:
	python3 tests/cases/sh-tests.py

FORCE:
