all: 
	java -jar ../plovr.jar serve snapjs-debug.json
build:
	java -jar ../plovr.jar build snapjs.json > snap.js
	java -jar ../plovr.jar build snapjs.min.json > snapjs.min.js
lint:
	fixjsstyle --strict -r ./src
	gjslint --strict -r ./src