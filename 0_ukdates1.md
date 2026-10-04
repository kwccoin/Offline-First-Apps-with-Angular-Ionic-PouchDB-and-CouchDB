gerneate using AI and put into index.html

```
  cd www
  python3 -m http.server 8000
```

browser with java script console open 

```
  http://localhost:8000/
```

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

{"couchdb":"Welcome","version":"3.5.2","git_sha":"5b4d92103","uuid":"9201c7425e91f936e5bc74f920ed2f52","features":["quickjs","access-ready","partitioned","pluggable-storage-engines","reshard","scheduler"],"vendor":{"name":"The Apache Software Foundation"}}
{"couchdb":"Welcome","version":"3.5.2","git_sha":"5b4d92103","uuid":"9201c7425e91f936e5bc74f920ed2f52","features":["quickjs","access-ready","partitioned","pluggable-storage-engines","reshard","scheduler"],"vendor":{"name":"The Apache Software Foundation"}}

admin = Cdb3579!
http://localhost:5984/_utils/#login

{"error":"unauthorized","reason":"You are not a server admin."}

mini is 192.168.1.41

Crazy about the andorid issue

bash
chflags uchg capacitor.config.json
Use code with caution.
Why this fixes it completely:
The uchg (user unchangeable) system flag locks the file at the kernel layer. The next time you run ./node_modules/.bin/cap sync, Capacitor will try to overwrite the file, find that it is locked by macOS, give up, and safely skip past it—leaving your custom androidScheme and server properties completely intact!
(Note: If you ever want to change your app name or appId in the future, you can easily unlock the file by opening your terminal and running chflags nouchg capacitor.config.json).

#h3 Otherwise has to keep on changing it after sync to 

{
  "appId": "com.yourname.ukstaytracker",
  "appName": "UK Stay Tracker",
  "webDir": "www",
  "server": {
    "hostname": "localhost",
    "androidScheme": "http",
    "iosScheme": "http"
  }
}

#h3 cut and paste the above to capactior.config.json