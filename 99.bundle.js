(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{393:function(n,a,s){"use strict";s.r(a),a.default='<p>Exports HTML as string. HTML is minimized when the compiler demands.</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> i -D html-loader</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>By default every local <code>&#x3C;img src="image.png"></code> is required (<code>require(\'./image.png\')</code>). You may need to specify loaders for images in your configuration (recommended <code>file-loader</code> or <code>url-loader</code>).</p>\n<p>You can specify which tag-attribute combination should be processed by this loader via the query parameter <code>attrs</code>. Pass an array or a space-separated list of <code>&#x3C;tag>:&#x3C;attribute></code> combinations. (Default: <code>attrs=img:src</code>)</p>\n<p>If you use <code>&#x3C;custom-elements></code>, and lots of them make use of a <code>custom-src</code> attribute, you don\'t have to specify each combination <code>&#x3C;tag>:&#x3C;attribute></code>: just specify an empty tag like <code>attrs=:custom-src</code> and it will match every element.</p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.(html)$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      attrs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\':data-src\'</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>To completely disable tag-attribute processing (for instance, if you\'re handling image loading on the client side) you can pass in <code>attrs=false</code>.</p>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>With this configuration:</p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> test<span class="token punctuation">:</span> <span class="token regex">/\\.jpg$/</span><span class="token punctuation">,</span> use<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">"file-loader"</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> test<span class="token punctuation">:</span> <span class="token regex">/\\.png$/</span><span class="token punctuation">,</span> use<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">"url-loader?mimetype=image/png"</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    publicPath<span class="token punctuation">:</span> <span class="token string">"http://cdn.example.com/[hash]/"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image.png<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image2x.png<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-loader!./file.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img src="http://cdn.example.com/49eba9f/a992ca.png"</span>\n<span class="token comment">//         data-src="image2x.png">\'</span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-loader?attrs=img:data-src!./file.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img src="image.png" data-src="data:image/png;base64,..." >\'</span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-loader?attrs=img:src img:data-src!./file.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-loader?attrs[]=img:src&#x26;attrs[]=img:data-src!./file.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img  src="http://cdn.example.com/49eba9f/a992ca.png"        </span>\n<span class="token comment">//           data-src="data:image/png;base64,..." >\'</span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-loader?-attrs!./file.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img  src="image.jpg"  data-src="image2x.png" >\'</span></code></pre>\n<p>minimized by running <code>webpack --optimize-minimize</code></p>\n<pre><code class="hljs language-html">\'<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span>http://cdn.example.com/49eba9f/a9f92ca.jpg</span>\n      <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation">=</span>data:image/png;base64,...</span><span class="token punctuation">></span></span>\'</code></pre>\n<p>or specify the <code>minimize</code> property in the rule\'s options in your <code>webpack.conf.js</code></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/</span><span class="token punctuation">,</span>\n    use<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        minimize<span class="token punctuation">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p>See <a href="https://github.com/kangax/html-minifier#options-quick-reference">html-minifier</a>\'s documentation for more information on the available options.</p>\n<p>The enabled rules for minimizing by default are the following ones:</p>\n<ul>\n<li>\n<p>removeComments</p>\n</li>\n<li>\n<p>removeCommentsFromCDATA</p>\n</li>\n<li>\n<p>removeCDATASectionsFromCDATA</p>\n</li>\n<li>\n<p>collapseWhitespace</p>\n</li>\n<li>\n<p>conservativeCollapse</p>\n</li>\n<li>\n<p>removeAttributeQuotes</p>\n</li>\n<li>\n<p>useShortDoctype</p>\n</li>\n<li>\n<p>keepClosingSlash</p>\n</li>\n<li>\n<p>minifyJS</p>\n</li>\n<li>\n<p>minifyCSS</p>\n</li>\n<li>\n<p>removeScriptTypeAttributes</p>\n</li>\n<li>\n<p>removeStyleTypeAttributes</p>\n<p>The rules can be disabled using the following options in your <code>webpack.conf.js</code></p>\n</li>\n</ul>\n<pre><code class="hljs language-js">module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/</span><span class="token punctuation">,</span>\n    use<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        minimize<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        removeComments<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        collapseWhitespace<span class="token punctuation">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="root-relative-urls">\'Root-relative\' URLs<a href="#root-relative-urls" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>For urls that start with a <code>/</code>, the default behavior is to not translate them.\nIf a <code>root</code> query parameter is set, however, it will be prepended to the url\nand then translated.</p>\n<p>With the same configuration as above:</p>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-loader!./file.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img  src="/image.jpg">\'</span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-loader?root=.!./file.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// => \'&#x3C;img  src="http://cdn.example.com/49eba9f/a992ca.jpg">\'</span></code></pre>\n<h3 id="interpolation">Interpolation<a href="#interpolation" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>You can use <code>interpolate</code> flag to enable interpolation syntax for ES6 template strings, like so:</p>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-loader?interpolate!./file.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>${require(`./images/gallery.png`)}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>div</span><span class="token punctuation">></span></span>${require(\'./components/gallery.html\')}<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n<p>And if you only want to use <code>require</code> in template and any other <code>${}</code> are not to be translated, you can set <code>interpolate</code> flag to <code>require</code>, like so:</p>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-loader?interpolate=require!./file.ftl"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>#list</span> <span class="token attr-name">list</span> <span class="token attr-name">as</span> <span class="token attr-name">list</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>${list.href!}<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>${list.name}<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>a</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>#list</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>${require(`./images/gallery.png`)}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>div</span><span class="token punctuation">></span></span>${require(\'./components/gallery.html\')}<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n<h3 id="export-formats">Export formats<a href="#export-formats" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>There are different export formats available:</p>\n<ul>\n<li><code>module.exports</code> (default, cjs format). "Hello world" becomes <code>module.exports = "Hello world";</code></li>\n<li><code>exports.default</code> (when <code>exportAsDefault</code> param is set, es6to5 format). "Hello world" becomes <code>exports.default = "Hello world";</code></li>\n<li><code>export default</code> (when <code>exportAsEs6Default</code> param is set, es6 format). "Hello world" becomes <code>export default "Hello world";</code></li>\n</ul>\n<h3 id="advanced-options">Advanced options<a href="#advanced-options" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>If you need to pass <a href="https://github.com/webpack/html-loader/pull/46">more advanced options</a>, especially those which cannot be stringified, you can also define an <code>htmlLoader</code>-property on your <code>webpack.config.js</code>:</p>\n<pre><code class="hljs language-js"><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">"html-loader"</span> <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  htmlLoader<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    ignoreCustomFragments<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">/</span>\\<span class="token punctuation">{</span>\\<span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">?</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    root<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'assets\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    attrs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'img:src\'</span><span class="token punctuation">,</span> <span class="token string">\'link:href\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>If you need to define two different loader configs, you can also change the config\'s property name via <code>html-loader?config=otherHtmlLoaderConfig</code>:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">"html-loader?config=otherHtmlLoaderConfig"</span> <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  otherHtmlLoaderConfig<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="export-into-html-files">Export into HTML files<a href="#export-into-html-files" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>A very common scenario is exporting the HTML into their own <em>.html</em> file, to\nserve them directly instead of injecting with javascript. This can be achieved\nwith a combination of 3 loaders:</p>\n<ul>\n<li><a href="/loaders/file-loader/">file-loader</a></li>\n<li><a href="https://github.com/peerigon/extract-loader">extract-loader</a></li>\n<li>html-loader</li>\n</ul>\n<p>The html-loader will parse the URLs, require the images and everything you\nexpect. The extract loader will parse the javascript back into a proper html\nfile, ensuring images are required and point to proper path, and the file loader\nwill write the <em>.html</em> file for you. Example:</p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'file-loader?name=[name].[ext]\'</span><span class="token punctuation">,</span> <span class="token string">\'extract-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars.githubusercontent.com/u/18315?v=3">\n        </br>\n        <a href="https://github.com/hemanth">Hemanth</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars.githubusercontent.com/u/8420490?v=3">\n        </br>\n        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150" src="https://avatars.githubusercontent.com/u/5419992?v=3">\n        </br>\n        <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars.githubusercontent.com/u/6542274?v=3">\n        </br>\n        <a href="https://github.com/imvetri">Imvetri</a>\n      </td>\n    </tr>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars.githubusercontent.com/u/1520965?v=3">\n        </br>\n        <a href="https://github.com/andreicek">Andrei Crnković</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars.githubusercontent.com/u/3367801?v=3">\n        </br>\n        <a href="https://github.com/abouthiroppy">Yuta Hiroto</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150" src="https://avatars.githubusercontent.com/u/80044?v=3">\n        </br>\n        <a href="https://github.com/petrunov">Vesselin Petrunov</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars.githubusercontent.com/u/973543?v=3">\n        </br>\n        <a href="https://github.com/gajus">Gajus Kuizinas</a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n'}}]);