#### vtk.js-tests

Contains example scripts to load and render ```.vtk``` and ```.obj``` files
with [vtk.js](https://kitware.github.io/vtk-js/index.html).

The project is based on the instructions [here](https://docs.google.com/presentation/d/17TCS6EhFi6SWFIrcAJ-DFdFzFFL-WD9BBTv-owmMdDU/edit#slide=id.p).


Edit the ```filename``` in ```webpack.config.js```

To build run from the parent directory:

```bash
npm run build
```

To avoid CORS issues, the files of ```dist``` directory need to be served by an http server. Choose one of the two options, and run from the ```dist``` directory:

1. If you have **python** installed run ```python3 -m http.server```

2. If you have **node.js** and installed, run ```http-server```

Visit ```http://localhost:8080```


To install the ```http-server```:
```bash
npm install -g http-server
```
If you get permission denied, run:
```bash
sudo chown -R $(whoami) /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share
```
