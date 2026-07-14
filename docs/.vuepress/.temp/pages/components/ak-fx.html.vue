<template><div><h1 id="ak-fx-效果" tabindex="-1"><a class="header-anchor" href="#ak-fx-效果"><span>ak-fx 效果</span></a></h1>
<h2 id="glow-辉光效果" tabindex="-1"><a class="header-anchor" href="#glow-辉光效果"><span>glow 辉光效果</span></a></h2>
<blockquote>
<p>更多色彩参见 <RouteLink to="/components/#color-%E8%89%B2%E5%BD%A9">色彩</RouteLink>。</p>
</blockquote>
<h3 id="glow-辉光按钮" tabindex="-1"><a class="header-anchor" href="#glow-辉光按钮"><span>glow 辉光按钮</span></a></h3>
<demo-block-dark>
<button class="ak-button ak-fx--glow">放弃行动</button>
<button class="ak-button ak-button--action ak-fx--glow" style="--ak-fx-glow-color: var(--ak-color-primary);">开始行动</button>
</demo-block-dark>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-fx--glow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>放弃行动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span></span>
<span class="line">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-button--action ak-fx--glow<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">--ak-fx-glow-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ak-color-primary<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span></span>
<span class="line"><span class="token punctuation">></span></span></span>
<span class="line">  开始行动</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="outline-轮廓效果" tabindex="-1"><a class="header-anchor" href="#outline-轮廓效果"><span>outline 轮廓效果</span></a></h2>
<demo-block>
<button class="ak-button ak-fx--outline">放弃行动</button>
<button class="ak-button ak-fx--outline" style="--ak-outline-color: purple">放弃行动</button>
<button class="ak-button ak-fx--outline" style="--ak-outline-color: var(--ak-color-primary)">放弃行动</button>
</demo-block>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-fx--outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>放弃行动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-fx--outline<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">--ak-outline-color</span><span class="token punctuation">:</span> purple</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">  放弃行动</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span></span>
<span class="line">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-fx--outline<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">--ak-outline-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ak-color-primary<span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span></span>
<span class="line"><span class="token punctuation">></span></span></span>
<span class="line">  放弃行动</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="skew-倾斜效果" tabindex="-1"><a class="header-anchor" href="#skew-倾斜效果"><span>skew 倾斜效果</span></a></h2>
<demo-block-dark>
<button class="ak-button ak-button--fab ak-fx--skew-left">
<svg class="ak-button__icon ak-icon" aria-hidden="true">
<use xlink:href="#icon-gear"></use>
</svg>
</button>
<button class="ak-button ak-button--fab ak-fx--skew-right" style="float:right">
<svg class="ak-button__icon ak-icon" aria-hidden="true">
<use xlink:href="#icon-pause"></use>
</svg>
</button>
</demo-block-dark>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-button--fab ak-fx--skew-left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button__icon ak-icon<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#icon-gear<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-button--fab ak-fx--skew-right<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">float</span><span class="token punctuation">:</span>right</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button__icon ak-icon<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#icon-pause<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


