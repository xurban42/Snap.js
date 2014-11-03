.PHONY: all build lint clean

all: 
	java -jar ../plovr.jar serve snapjs-debug.json
build:
	java -jar ../plovr.jar build snapjs.json > build/snap.js
	java -jar ../plovr.jar build snapjs.min.json > build/snapjs.min.js
lint:
	fixjsstyle --strict -r ./src
	gjslint --strict -r ./src
clean:
	rm -f *.js