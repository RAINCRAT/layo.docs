# ak-fx 效果

## glow 辉光效果

> 更多色彩参见 [色彩](/components/#color-色彩)。

### glow 辉光按钮

<demo-block-dark>
<button class="ak-button ak-fx--glow">放弃行动</button>
<button class="ak-button ak-button--action ak-fx--glow" style="--ak-fx-glow-color: var(--ak-color-primary);">开始行动</button>
</demo-block-dark>

```html
<button class="ak-button ak-fx--glow">放弃行动</button>
<button
  class="ak-button ak-button--action ak-fx--glow"
  style="--ak-fx-glow-color: var(--ak-color-primary);"
>
  开始行动
</button>
```

## outline 轮廓效果

<demo-block>
<button class="ak-button ak-fx--outline">放弃行动</button>
<button class="ak-button ak-fx--outline" style="--ak-outline-color: purple">放弃行动</button>
<button class="ak-button ak-fx--outline" style="--ak-outline-color: var(--ak-color-primary)">放弃行动</button>
</demo-block>

```html
<button class="ak-button ak-fx--outline">放弃行动</button>
<button class="ak-button ak-fx--outline" style="--ak-outline-color: purple">
  放弃行动
</button>
<button
  class="ak-button ak-fx--outline"
  style="--ak-outline-color: var(--ak-color-primary)"
>
  放弃行动
</button>
```

## skew 倾斜效果

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

```html
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
```
