<template><div><h1 id="ak-button-按钮" tabindex="-1"><a class="header-anchor" href="#ak-button-按钮"><span>ak-button 按钮</span></a></h1>
<p>明日方舟按钮样式</p>
<h2 id="base-普通按钮" tabindex="-1"><a class="header-anchor" href="#base-普通按钮"><span>base 普通按钮</span></a></h2>
<demo-block-dark>
<button class="ak-button ak-font-serif">开始唤醒</button>
<button class="ak-button ak-button--outline">开始唤醒</button>
<button class="ak-button ak-button--action">开始行动</button>
</demo-block-dark>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>开始唤醒<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-button--outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>开始唤醒<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-button--action<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>开始行动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="block-块状按钮" tabindex="-1"><a class="header-anchor" href="#block-块状按钮"><span>block 块状按钮</span></a></h2>
<demo-block-dark>
<button class="ak-button ak-button--block">放弃行动</button>
</demo-block-dark>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-button--block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>放弃行动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="icon-带图标的按钮" tabindex="-1"><a class="header-anchor" href="#icon-带图标的按钮"><span>icon 带图标的按钮</span></a></h2>
<demo-block-dark>
<button class="ak-button">
<svg class="ak-button__icon" aria-hidden="true">
<use xlink:href="#icon-finger-click"></use>
</svg>
<span class="ak-button__label">接管作战</span>
</button>
</demo-block-dark>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button__icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/img/icon/finger-click.svg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button__label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>接管作战<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fab-浮动动作按钮" tabindex="-1"><a class="header-anchor" href="#fab-浮动动作按钮"><span>fab 浮动动作按钮</span></a></h2>
<demo-block-dark>
<button class="ak-button ak-button--fab">
<svg class="ak-button__icon ak-icon" aria-hidden="true">
<use xlink:href="#icon-pause"></use>
</svg>
</button>
</demo-block-dark>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button ak-button--fab<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button__icon ak-icon<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#icon-pause<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如果你想实现明日方舟中按钮的斜切效果，你可以为其加上 <code v-pre>ak-fx--skew-left</code> or <code v-pre>ak-fx--skew-right</code>。<br>
可参考 <RouteLink to="/components/ak-fx.html#skew-%E5%80%BE%E6%96%9C%E6%95%88%E6%9E%9C">ak-fx 斜切效果</RouteLink></p>
</blockquote>
<h2 id="start-开始按钮" tabindex="-1"><a class="header-anchor" href="#start-开始按钮"><span>start 开始按钮</span></a></h2>
<demo-block-dark>
<div class="ak-button--start">
  <div class="icon triangle-right"></div>
  <div class="label">START</div>
</div>
</demo-block-dark>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ak-button--start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon triangle-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>START<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如想要添加更多效果参见 <a href="/components/ak-fx">ak-fx</a>。</p>
</blockquote>
<h2 id="card-卡片按钮" tabindex="-1"><a class="header-anchor" href="#card-卡片按钮"><span>card 卡片按钮</span></a></h2>
<demo-block-dust>
<demo-button-card></demo-button-card>
</demo-block-dust>
<p>&lt;&lt;&lt; @/.vuepress/components/demo/button-card.vue</p>
</div></template>


