<template><div><h1 id="设计规范" tabindex="-1"><a class="header-anchor" href="#设计规范"><span>设计规范</span></a></h1>
<h2 id="color-色彩" tabindex="-1"><a class="header-anchor" href="#color-色彩"><span>Color 色彩</span></a></h2>
<p>参考自道具色彩分级</p>
<div class="ak-color-box" style="background">
  <div class="ak-color-item bg-low"><span class="color-level">Low</span><span class="color-code">#9c9c9c</span></div>
  <div class="ak-color-item bg-basic"><span class="color-level">Basic</span><span class="color-code">#d8dd5a</span></div>
  <div class="ak-color-item bg-primary"><span class="color-level">Primary</span><span class="color-code">#4aabea</span></div>
  <div class="ak-color-item bg-secondary"><span class="color-level">Secondary</span><span class="color-code">#cfc2d1</span></div>
  <div class="ak-color-item bg-advanced"><span class="color-level">Advanced</span><span class="color-code">#f1c644</span></div>
</div>
<div class="ak-ref">
<blockquote>
<p><img src="/img/game/foreign-iron-fragments.webp" alt="异铁碎片"> <img src="/img/game/basic-combat-record.webp" alt="基础作战记录"> <img src="/img/game/primary-combat-record.webp" alt="初级作战记录"> <img src="/img/game/intermediate-combat-record.webp" alt="中级作战记录"> <img src="/img/game/advanced-combat-record.webp" alt="高级作战记录"></p>
</blockquote>
</div>
<table>
<thead>
<tr>
<th>Var</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>--ak-color-low</td>
<td>#9C9C9C</td>
</tr>
<tr>
<td>--ak-color-basic</td>
<td>#D8DD5A</td>
</tr>
<tr>
<td>--ak-color-primary</td>
<td>#4AABEA</td>
</tr>
<tr>
<td>--ak-color-secondary</td>
<td>#CFC2D1</td>
</tr>
<tr>
<td>--ak-color-advaned</td>
<td>#F1C644</td>
</tr>
</tbody>
</table>
<h2 id="typography-字体" tabindex="-1"><a class="header-anchor" href="#typography-字体"><span>Typography 字体</span></a></h2>
<h3 id="衬线字体" tabindex="-1"><a class="header-anchor" href="#衬线字体"><span>衬线字体</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token property">font-family</span><span class="token punctuation">:</span> Noto Serif SC<span class="token punctuation">,</span> serif<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="ak-font-serif ak-text--title">明日方舟</div>
<p class="ak-font-serif">明日方舟</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-font-serif ak-text--title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>明日方舟<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-font-serif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>明日方舟<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无衬线字体" tabindex="-1"><a class="header-anchor" href="#无衬线字体"><span>无衬线字体</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token property">font-family</span><span class="token punctuation">:</span> Roboto<span class="token punctuation">,</span> Noto Sans<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="ak-font-sans-serif ak-text--title">明日方舟</div>
<p class="ak-font-sans-serif">明日方舟</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-font-sans-serif ak-text--title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>明日方舟<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-font-sans-serif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>明日方舟<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


