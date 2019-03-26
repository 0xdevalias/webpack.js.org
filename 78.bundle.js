(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{372:function(e,n,s){"use strict";s.r(n),n.default='<blockquote class="tip">\n<p>This guide extends on code examples found in the <a href="/guides/output-management">Output Management</a> guide.</p>\n</blockquote>\n<p>Progressive Web Applications (or PWAs) are web apps that deliver an experience similar to native applications. There are many things that can contribute to that. Of these, the most significant is the ability for an app to be able to function when <strong>offline</strong>. This is achieved through the use of a web technology called <a href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers</a>.</p>\n<p>This section will focus on adding an offline experience to our app. We\'ll achieve this using a Google project called <a href="https://github.com/GoogleChrome/workbox">Workbox</a> which provides tools that help make offline support for web apps easier to setup.</p>\n<h2 id="we-dont-work-offline-now">We Don\'t Work Offline Now<a href="#we-dont-work-offline-now" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>So far, we\'ve been viewing the output by going directly to the local file system. Typically though, a real user accesses a web app over a network; their browser talking to a <strong>server</strong> which will serve up the required assets (e.g. <code>.html</code>, <code>.js</code>, and <code>.css</code> files).</p>\n<p>So let\'s test what the current experience is like using a simple server. Let\'s use the <a href="https://www.npmjs.com/package/http-server">http-server</a> package: <code>npm install http-server --save-dev</code>. We\'ll also amend the <code>scripts</code> section of our <code>package.json</code> to add in a <code>start</code> script:</p>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-diff">{\n  ...\n  "scripts": {\n<span class="token deleted">-    "build": "webpack"</span>\n<span class="token inserted">+    "build": "webpack",</span>\n<span class="token inserted">+    "start": "http-server dist"</span>\n  },\n  ...\n}</code></pre>\n<p>If you haven\'t previously done so, run the command <code>npm run build</code> to build your project. Then run the command <code>npm start</code>. This should produce the following output:</p>\n<pre><code class="hljs language-bash"><span class="token operator">></span> http-server dist\n\nStarting up http-server, serving dist\nAvailable on:\n  http://xx.x.x.x:8080\n  http://127.0.0.1:8080\n  http://xxx.xxx.x.x:8080\nHit CTRL-C to stop the server</code></pre>\n<p>If you open your browser to <code>http://localhost:8080</code> (i.e. <code>http://127.0.0.1</code>) you should see your webpack application being served from the <code>dist</code> directory. If you stop the server and refresh, the webpack application is no longer available.  </p>\n<p>This is what we aim to change. Once we reach the end of this module we should be able to stop the server, hit refresh and still see our application.</p>\n<h2 id="adding-workbox">Adding Workbox<a href="#adding-workbox" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Let\'s add the Workbox webpack plugin and adjust the <code>webpack.config.js</code> file:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> workbox-webpack-plugin --save-dev</code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n  const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n  const CleanWebpackPlugin = require(\'clean-webpack-plugin\');\n<span class="token inserted">+ const WorkboxPlugin = require(\'workbox-webpack-plugin\');</span>\n\n  module.exports = {\n    entry: {\n      app: \'./src/index.js\',\n      print: \'./src/print.js\'\n    },\n    plugins: [\n      new CleanWebpackPlugin([\'dist\']),\n      new HtmlWebpackPlugin({\n<span class="token deleted">-       title: \'Output Management\'</span>\n<span class="token inserted">+       title: \'Progressive Web Application\'</span>\n<span class="token deleted">-     })</span>\n<span class="token inserted">+     }),</span>\n<span class="token inserted">+     new WorkboxPlugin.GenerateSW({</span>\n<span class="token inserted">+       // these options encourage the ServiceWorkers to get in there fast </span>\n<span class="token inserted">+       // and not allow any straggling "old" SWs to hang around</span>\n<span class="token inserted">+       clientsClaim: true,</span>\n<span class="token inserted">+       skipWaiting: true</span>\n<span class="token inserted">+     })</span>\n    ],\n    output: {\n      filename: \'[name].bundle.js\',\n      path: path.resolve(__dirname, \'dist\')\n    }\n  };</code></pre>\n<p>With that in place, let\'s see what happens when we do an <code>npm run build</code>:</p>\n<pre><code class="hljs language-bash"><span class="token punctuation">..</span>.\n                  Asset       Size  Chunks                    Chunk Names\n          app.bundle.js     545 kB    0, 1  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  <span class="token punctuation">[</span>big<span class="token punctuation">]</span>  app\n        print.bundle.js    2.74 kB       1  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>         print\n             index.html  254 bytes          <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>\nprecache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js  268 bytes          <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>\n      service-worker.js       1 kB          <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>\n<span class="token punctuation">..</span>.</code></pre>\n<p>As you can see, we now have 2 extra files being generated; <code>service-worker.js</code> and the more verbose <code>precache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js</code>. <code>service-worker.js</code> is the Service Worker file and <code>precache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js</code> is a file that <code>service-worker.js</code> requires so it can run. Your own generated files will likely be different; but you should have an <code>service-worker.js</code> file there.</p>\n<p>So we\'re now at the happy point of having produced a Service Worker. What\'s next?</p>\n<h2 id="registering-our-service-worker">Registering Our Service Worker<a href="#registering-our-service-worker" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Let\'s allow our Service Worker to come out and play by registering it. We\'ll do that by adding the registration code below:</p>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-diff">  import _ from \'lodash\';\n  import printMe from \'./print.js\';\n\n<span class="token inserted">+ if (\'serviceWorker\' in navigator) {</span>\n<span class="token inserted">+   window.addEventListener(\'load\', () => {</span>\n<span class="token inserted">+     navigator.serviceWorker.register(\'/service-worker.js\').then(registration => {</span>\n<span class="token inserted">+       console.log(\'SW registered: \', registration);</span>\n<span class="token inserted">+     }).catch(registrationError => {</span>\n<span class="token inserted">+       console.log(\'SW registration failed: \', registrationError);</span>\n<span class="token inserted">+     });</span>\n<span class="token inserted">+   });</span>\n<span class="token inserted">+ }</span></code></pre>\n<p>Once more <code>npm run build</code> to build a version of the app including the registration code. Then serve it with <code>npm start</code>. Navigate to <code>http://localhost:8080</code> and take a look at the console. Somewhere in there you should see:</p>\n<pre><code class="hljs language-bash">SW registered</code></pre>\n<p>Now to test it. Stop your server and refresh your page. If your browser supports Service Workers then you should still be looking at your application. However, it has been served up by your Service Worker and <strong>not</strong> by the server.</p>\n<h2 id="conclusion">Conclusion<a href="#conclusion" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>You have built an offline app using the Workbox project. You\'ve started the journey of turning your web app into a PWA. You may now want to think about taking things further. A good resource to help you with that can be found <a href="https://developers.google.com/web/progressive-web-apps/">here</a>.</p>\n'}}]);