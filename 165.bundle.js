(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{459:function(n,e,i){"use strict";i.r(e),e.default='<p>The <code>ProgressPlugin</code> provides a way to customize how progress is reported during a compilation.</p>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Create an instance of <code>ProgressPlugin</code> with a handler function which will be called when hooks report progress:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// e.g. Output each progress message directly to the console:</span>\n  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProgressPlugin</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<ul>\n<li><code>handler</code> is a function which takes these arguments:</li>\n<li><code>percentage</code>: a number between 0 and 1 indicating the completion percentage of the compilation.</li>\n<li><code>message</code>: a short description of the currently-executing hook.</li>\n<li><code>...args</code>: zero or more additional strings describing the current progress.</li>\n</ul>\n<h2 id="supported-hooks">Supported Hooks<a href="#supported-hooks" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The following hooks report progress information to <code>ProgressPlugin</code>.</p>\n<blockquote class="tip">\n<p><em>Hooks marked with * allow plugins to report progress information using <code>reportProgress</code>. For more, see <a href="/api/plugins/#reporting-progress">Plugin API: Reporting Progress</a></em></p>\n</blockquote>\n<p><strong>Compiler</strong></p>\n<ul>\n<li>compilation</li>\n<li>emit*</li>\n<li>afterEmit*</li>\n<li>done</li>\n</ul>\n<p><strong>Compilation</strong></p>\n<ul>\n<li>buildModule</li>\n<li>failedModule</li>\n<li>succeedModule</li>\n<li>finishModules*</li>\n<li>seal*</li>\n<li>optimizeDependenciesBasic*</li>\n<li>optimizeDependencies*</li>\n<li>optimizeDependenciesAdvanced*</li>\n<li>afterOptimizeDependencies*</li>\n<li>optimize*</li>\n<li>optimizeModulesBasic*</li>\n<li>optimizeModules*</li>\n<li>optimizeModulesAdvanced*</li>\n<li>afterOptimizeModules*</li>\n<li>optimizeChunksBasic*</li>\n<li>optimizeChunks*</li>\n<li>optimizeChunksAdvanced*</li>\n<li>afterOptimizeChunks*</li>\n<li>optimizeTree*</li>\n<li>afterOptimizeTree*</li>\n<li>optimizeChunkModulesBasic*</li>\n<li>optimizeChunkModules*</li>\n<li>optimizeChunkModulesAdvanced*</li>\n<li>afterOptimizeChunkModules*</li>\n<li>reviveModules*</li>\n<li>optimizeModuleOrder*</li>\n<li>advancedOptimizeModuleOrder*</li>\n<li>beforeModuleIds*</li>\n<li>moduleIds*</li>\n<li>optimizeModuleIds*</li>\n<li>afterOptimizeModuleIds*</li>\n<li>reviveChunks*</li>\n<li>optimizeChunkOrder*</li>\n<li>beforeChunkIds*</li>\n<li>optimizeChunkIds*</li>\n<li>afterOptimizeChunkIds*</li>\n<li>recordModules*</li>\n<li>recordChunks*</li>\n<li>beforeHash*</li>\n<li>afterHash*</li>\n<li>recordHash*</li>\n<li>beforeModuleAssets*</li>\n<li>beforeChunkAssets*</li>\n<li>additionalChunkAssets*</li>\n<li>record*</li>\n<li>additionalAssets*</li>\n<li>optimizeChunkAssets*</li>\n<li>afterOptimizeChunkAssets*</li>\n<li>optimizeAssets*</li>\n<li>afterOptimizeAssets*</li>\n<li>afterSeal*</li>\n</ul>\n<h2 id="source">Source<a href="#source" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="https://github.com/webpack/webpack/blob/master/lib/ProgressPlugin.js"><code>ProgressPlugin</code> source</a></li>\n</ul>\n'}}]);