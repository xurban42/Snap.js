.PHONY: all build lint clean

all: 
	java -jar ../plovr.jar serve sliderjs-debug.json
build:
	java -jar ../plovr.jar build sliderjs.json > build/slider.js
	java -jar ../plovr.jar build sliderjs.min.json > build/sliderjs.min.js
lint:
	fixjsstyle --strict -r ./src
	gjslint --strict -r ./src
clean:
	rm -f *.js