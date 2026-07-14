<template><div><h1 id="ak-card-卡片" tabindex="-1"><a class="header-anchor" href="#ak-card-卡片"><span>ak-card 卡片</span></a></h1>
<h2 id="outline-描边卡片" tabindex="-1"><a class="header-anchor" href="#outline-描边卡片"><span>outline 描边卡片</span></a></h2>
<demo-block>
<div class="ak-card ak-card--outline"></div>
</demo-block>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-card ak-card--outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="stripe-条纹卡片" tabindex="-1"><a class="header-anchor" href="#stripe-条纹卡片"><span>stripe 条纹卡片</span></a></h2>
<demo-block-dark>
<div class="ak-card ak-card--stripe"></div>
</demo-block-dark>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-card ak-card--stripe<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="place-人物放置卡片" tabindex="-1"><a class="header-anchor" href="#place-人物放置卡片"><span>place 人物放置卡片</span></a></h2>
<p>如果想要保持 <code v-pre>focus</code> 状态，请增加 <code v-pre>tabindex</code> 属性。</p>
<demo-block-color>
<div class="ak-card ak-card--place"></div>
<div class="ak-card ak-card--place" style="--ak-card-place-color: var(--ak-color-yellow);"></div>
<div tabindex="0" class="ak-card ak-card--place" style="--ak-card-place-color: var(--ak-color-advanced);"></div>
</demo-block-color>
<blockquote>
<p>值为 0 、非法值、或者没有 tabindex 值的元素应该放置在 tabindex 值为正值的元素后面。<br>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex" target="_blank" rel="noopener noreferrer">tabindex - MDN</a></p>
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-card ak-card--place<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span></span>
<span class="line">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-card ak-card--place<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">--ak-card-place-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ak-color-yellow<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span></span>
<span class="line"><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span></span>
<span class="line">  <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-card ak-card--place<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">--ak-card-place-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ak-color-advanced<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span></span>
<span class="line"><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


