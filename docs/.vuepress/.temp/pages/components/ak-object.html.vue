<template><div><h1 id="ak-object-物体" tabindex="-1"><a class="header-anchor" href="#ak-object-物体"><span>ak-object 物体</span></a></h1>
<p>明日方舟地图通常为 10 * 6</p>
<h2 id="cube-立方体" tabindex="-1"><a class="header-anchor" href="#cube-立方体"><span>Cube 立方体</span></a></h2>
<demo-block-dark>
<div class="perspective">
  <template v-for="num in 30">
  <div class="ak-cube" style="--cube-size:65px; --cube-border-widtth:10px">
    <div class="ak-face front">
      <svg class="ak-icon" aria-hidden="true">
        <use xlink:href="#icon-warning"></use>
      </svg>
      <div class="ak-face__lines">
        <div class="ak-face__line--tl"></div>
        <div class="ak-face__line--tr"></div>
        <div class="ak-face__line--bl"></div>
        <div class="ak-face__line--br"></div>
      </div>
    </div>
    <div class="ak-face back"></div>
    <div class="ak-face right"></div>
    <div class="ak-face left"></div>
    <div class="ak-face top"></div>
    <div class="ak-face bottom"></div>
  </div>
  </template>
  <template v-for="num in 30">
  <div class="ak-cube" style="--cube-color: rgba(255,0,0,0.4); --cube-size:65px; --cube-border-widtth:10px">
    <div class="ak-face front">
      <svg class="ak-icon" aria-hidden="true">
        <use xlink:href="#icon-warning"></use>
      </svg>
      <div class="ak-face__lines">
        <div class="ak-face__line--tl"></div>
        <div class="ak-face__line--tr"></div>
        <div class="ak-face__line--bl"></div>
        <div class="ak-face__line--br"></div>
      </div>
    </div>
    <div class="ak-face back"></div>
    <div class="ak-face right"></div>
    <div class="ak-face left"></div>
    <div class="ak-face top"></div>
    <div class="ak-face bottom"></div>
  </div>
  </template>
</div>
</demo-block-dark>
<h3 id="todo" tabindex="-1"><a class="header-anchor" href="#todo"><span>Todo</span></a></h3>
<ul>
<li>四条线</li>
</ul>
<table>
<thead>
<tr>
<th>Var</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>--cube-color</td>
<td>立方体颜色</td>
</tr>
<tr>
<td>--cube-size</td>
<td>立方体尺寸大小（宽高始终一致）</td>
</tr>
<tr>
<td>--cube-border-width</td>
<td>立方体边宽度</td>
</tr>
</tbody>
</table>
</div></template>


