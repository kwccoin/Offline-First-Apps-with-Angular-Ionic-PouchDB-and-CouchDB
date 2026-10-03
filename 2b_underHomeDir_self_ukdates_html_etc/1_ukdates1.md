gerneate using AI and put into index.html

```python3 -m http.server 8000```

```
  touch favicon.ico
  touch apple-touch-icon.png
  touch apple-touch-icon-precomposed.png
```

error 

```
[Error] Failed to load resource: the server responded with a status of 404 (File not found) (hero-poster.avif, line 0)
[Error] Refused to execute https://cloudflare.com/ as script because "X-Content-Type-Options: nosniff" was given and its Content-Type is not a script MIME type.
[Error] ReferenceError: Can't find variable: PouchDB
	Global Code (localhost:193)
[Warning] The resource http://localhost:8000/fonts/Kunst%20Grotesk%20Regular.woff2 was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it wasn't preloaded for nothing.
[Warning] The resource http://localhost:8000/fonts/Kunst%20Grotesk%20Medium.woff2 was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it wasn't preloaded for nothing.
[Warning] The resource http://localhost:8000/static/hero-poster.avif was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it wasn't preloaded for nothing.

```

```
curl -L https://cloudflare.com -o pouchdb.min.js
```

and change the cloudfare to 

```
<script src="pouchdb.min.js"></script>
```

### note use of shift reload otherwise may load the old script in the cache

