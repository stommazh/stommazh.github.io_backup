<script>

	export let checked = false;
	export let label = '';
	let className = '';
	export {className as class};

	function valueChanged (event) {
		console.log(event.target.checked);
	}
</script>

<div class={`rb-checkbox rb-checkbox_rounded ${className}`}>
	<label>
		<input type='checkbox' on:change={valueChanged}
					 bind:checked={checked}>
		<span class='rb-checkbox_rounded-box'>
				<span class='rb-checkbox_rounded-title'>
					<span data-text={label}>{label}</span>
				</span>
				<span class='rb-checkbox_rounded-ripple'>
					<span></span>
				</span>
			</span>
	</label>
</div>
<style>

    input {
        font-family: sans-serif;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }
    input {
        overflow: visible;
    }
    [type="checkbox"] {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
    }
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    :after,
    :before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .rb-checkbox_rounded label > input:focus ~ .rb-checkbox_rounded-box,
    :focus {
        outline: 0 !important;
    }
    ::-moz-selection {
        color: #fff;
        background: #000;
    }
    ::selection {
        color: #fff;
        background: #000;
    }
    input,
    label {
        -webkit-tap-highlight-color: transparent;
    }
    input {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
    @media print {
        *,
        ::after,
        ::before {
            text-shadow: none !important;
            -webkit-box-shadow: none !important;
            -moz-box-shadow: none !important;
            box-shadow: none !important;
        }
    }
    .rb-checkbox {
        display: inline;
    }
    .rb-checkbox-group .rb-checkbox {
        margin: 7px 6px;
    }
    @media (min-width: 768px) {
        .rb-checkbox-group .rb-checkbox {
            margin: 12px 9px;
        }
    }
    @media (min-width: 1600px) {
        .rb-checkbox-group .rb-checkbox {
            margin: 15px 10px;
        }
    }
    .rb-checkbox_rounded {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        contain: content;
    }
    .rb-checkbox_rounded:before {
        content: "";
        display: block;
        position: absolute;
        top: -15px;
        left: -10px;
        right: -10px;
        bottom: -15px;
    }
    .rb-checkbox_rounded-box {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 0 22px;
        height: 49px;
        overflow: hidden;
        font-size: 14px;
        letter-spacing: -0.01em;
        background: #fff;
        -webkit-border-radius: 68px;
        -moz-border-radius: 68px;
        border-radius: 68px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: opacity 0.4s;
        -o-transition: opacity 0.4s;
        -moz-transition: opacity 0.4s;
        transition: opacity 0.4s;
    }
    @media (min-width: 768px) {
        .rb-checkbox_rounded-box {
            padding: 0 32px;
            height: 65px;
            font-size: 18px;
            -webkit-border-radius: 90px;
            -moz-border-radius: 90px;
            border-radius: 90px;
        }
    }
    @media (min-width: 1600px) {
        .rb-checkbox_rounded-box {
            height: 72px;
            padding: 0 35px;
            font-size: 20px;
            -webkit-border-radius: 100px;
            -moz-border-radius: 100px;
            border-radius: 100px;
        }
    }
    .rb-checkbox_rounded-box:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px rgba(0, 0, 0, 0.1) solid;
        -webkit-border-radius: 68px;
        -moz-border-radius: 68px;
        border-radius: 68px;
        -webkit-transition: border-color 0.2s;
        -o-transition: border-color 0.2s;
        -moz-transition: border-color 0.2s;
        transition: border-color 0.2s;
    }
    @media (min-width: 768px) {
        .rb-checkbox_rounded-box:before {
            -webkit-border-radius: 90px;
            -moz-border-radius: 90px;
            border-radius: 90px;
        }
    }
    @media (min-width: 1600px) {
        .rb-checkbox_rounded-box:before {
            -webkit-border-radius: 100px;
            -moz-border-radius: 100px;
            border-radius: 100px;
        }
    }
    .rb-checkbox_rounded label > input:focus ~ .rb-checkbox_rounded-box:before,
    .rb-checkbox_rounded-box:focus:before {
        border-color: rgba(0, 0, 0, 0.25);
    }
    .rb-checkbox_rounded label > input:disabled ~ .rb-checkbox_rounded-box {
        opacity: 0.4;
        pointer-events: none;
    }
    .rb-checkbox_rounded-title {
        position: relative;
        top: -1px;
        display: block;
        overflow: hidden;
    }
    .rb-checkbox_rounded-title span {
        display: block;
        position: relative;
        z-index: 2;
        -webkit-transition: color 0.2s, -webkit-transform 0.4s;
        transition: color 0.2s, -webkit-transform 0.4s;
        -o-transition: color 0.2s, -o-transform 0.4s;
        -moz-transition: color 0.2s, transform 0.4s, -moz-transform 0.4s;
        transition: color 0.2s, transform 0.4s;
        transition: color 0.2s, transform 0.4s, -webkit-transform 0.4s,
        -moz-transform 0.4s, -o-transform 0.4s;
        -webkit-transform-origin: left top;
        -moz-transform-origin: left top;
        -ms-transform-origin: left top;
        -o-transform-origin: left top;
        transform-origin: left top;
    }
    .rb-checkbox_rounded-title span:after {
        content: attr(data-text);
        display: block;
        position: absolute;
        top: 150%;
        left: 0;
        -webkit-transform: skewY(5deg);
        -moz-transform: skewY(5deg);
        -ms-transform: skewY(5deg);
        -o-transform: skewY(5deg);
        transform: skewY(5deg);
        -webkit-transform-origin: left top;
        -moz-transform-origin: left top;
        -ms-transform-origin: left top;
        -o-transform-origin: left top;
        transform-origin: left top;
        -webkit-transition: -webkit-transform 0.4s;
        transition: -webkit-transform 0.4s;
        -o-transition: -o-transform 0.4s;
        -moz-transition: transform 0.4s, -moz-transform 0.4s;
        transition: transform 0.4s;
        transition: transform 0.4s, -webkit-transform 0.4s, -moz-transform 0.4s,
        -o-transform 0.4s;
    }
    .rb-checkbox_rounded-ripple {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-border-radius: 68px;
        -moz-border-radius: 68px;
        border-radius: 68px;
    }
    @media (min-width: 768px) {
        .rb-checkbox_rounded-ripple {
            -webkit-border-radius: 90px;
            -moz-border-radius: 90px;
            border-radius: 90px;
        }
    }
    @media (min-width: 1600px) {
        .rb-checkbox_rounded-ripple {
            -webkit-border-radius: 100px;
            -moz-border-radius: 100px;
            border-radius: 100px;
        }
    }
    .rb-checkbox_rounded-ripple span {
        display: block;
        width: 100%;
        height: 100%;
        -webkit-transform: translateY(100%) translateZ(0);
        -moz-transform: translateY(100%) translateZ(0);
        transform: translateY(100%) translateZ(0);
        background: currentColor;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.4, 0, 0, 1),
        -webkit-border-radius 0.5s cubic-bezier(0.4, 0, 0, 1);
        transition: -webkit-transform 0.5s cubic-bezier(0.4, 0, 0, 1),
        -webkit-border-radius 0.5s cubic-bezier(0.4, 0, 0, 1);
        -o-transition: border-radius 0.5s cubic-bezier(0.4, 0, 0, 1),
        -o-transform 0.5s cubic-bezier(0.4, 0, 0, 1);
        -moz-transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1),
        border-radius 0.5s cubic-bezier(0.4, 0, 0, 1),
        -moz-transform 0.5s cubic-bezier(0.4, 0, 0, 1),
        -moz-border-radius 0.5s cubic-bezier(0.4, 0, 0, 1);
        transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1),
        border-radius 0.5s cubic-bezier(0.4, 0, 0, 1);
        transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1),
        border-radius 0.5s cubic-bezier(0.4, 0, 0, 1),
        -webkit-transform 0.5s cubic-bezier(0.4, 0, 0, 1),
        -moz-transform 0.5s cubic-bezier(0.4, 0, 0, 1),
        -o-transform 0.5s cubic-bezier(0.4, 0, 0, 1),
        -webkit-border-radius 0.5s cubic-bezier(0.4, 0, 0, 1),
        -moz-border-radius 0.5s cubic-bezier(0.4, 0, 0, 1);
    }
    .rb-checkbox_rounded:hover .rb-checkbox_rounded-ripple {
        -webkit-mask-image: -webkit-radial-gradient(circle, #fff 100%, #000 100%);
    }
    .rb-checkbox_rounded:hover .rb-checkbox_rounded-title span {
        -webkit-transform: translateY(-150%) skewY(-7deg);
        -moz-transform: translateY(-150%) skewY(-7deg);
        -ms-transform: translateY(-150%) skewY(-7deg);
        -o-transform: translateY(-150%) skewY(-7deg);
        transform: translateY(-150%) skewY(-7deg);
    }
    @media (pointer: coarse) {
        .rb-checkbox_rounded:hover .rb-checkbox_rounded-title span {
            -webkit-transform: none;
            -moz-transform: none;
            -ms-transform: none;
            -o-transform: none;
            transform: none;
        }
    }
    .rb-checkbox_rounded:hover .rb-checkbox_rounded-title span:after {
        -webkit-transform: skewY(7deg);
        -moz-transform: skewY(7deg);
        -ms-transform: skewY(7deg);
        -o-transform: skewY(7deg);
        transform: skewY(7deg);
    }
    @media (pointer: coarse) {
        .rb-checkbox_rounded:hover .rb-checkbox_rounded-title span:after {
            -webkit-transform: none;
            -moz-transform: none;
            -ms-transform: none;
            -o-transform: none;
            transform: none;
        }
    }
    .rb-checkbox_rounded label {
        cursor: pointer;
    }
    .rb-checkbox_rounded label > input {
        position: absolute;
        padding: 0;
        margin: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        visibility: hidden;
        opacity: 0;
    }
    .rb-checkbox_rounded
    label
    > input:checked
    ~ .rb-checkbox_rounded-box
    .rb-checkbox_rounded-title {
        color: #fff;
    }
    .chrome
    .rb-checkbox_rounded
    label
    > input:checked
    ~ .rb-checkbox_rounded-box
    .rb-checkbox_rounded-ripple {
        -webkit-mask-image: -webkit-radial-gradient(circle, #fff 100%, #000 100%);
    }
    .rb-checkbox_rounded
    label
    > input:checked
    ~ .rb-checkbox_rounded-box
    .rb-checkbox_rounded-ripple
    span {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        -webkit-transform: translateY(0) translateZ(0);
        -moz-transform: translateY(0) translateZ(0);
        transform: translateY(0) translateZ(0);
        -webkit-transition-duration: 0s, 0s;
        -moz-transition-duration: 0s, 0s;
        -o-transition-duration: 0s, 0s;
        transition-duration: 0s, 0s;
        -webkit-animation: rb-checkbox_rounded-ripple-in 0.5s
        cubic-bezier(0.4, 0, 0, 1);
        -moz-animation: rb-checkbox_rounded-ripple-in 0.5s cubic-bezier(0.4, 0, 0, 1);
        -o-animation: rb-checkbox_rounded-ripple-in 0.5s cubic-bezier(0.4, 0, 0, 1);
        animation: rb-checkbox_rounded-ripple-in 0.5s cubic-bezier(0.4, 0, 0, 1);
    }
    /*! CSS Used keyframes */
    @-webkit-keyframes rb-checkbox_rounded-ripple-in {
        0% {
            -webkit-border-radius: 100%;
            border-radius: 100%;
            -webkit-transform: translateY(-100%) translateZ(0);
            transform: translateY(-100%) translateZ(0);
        }
        100% {
            -webkit-border-radius: 0;
            border-radius: 0;
            -webkit-transform: translateY(0) translateZ(0);
            transform: translateY(0) translateZ(0);
        }
    }
    @-moz-keyframes rb-checkbox_rounded-ripple-in {
        0% {
            -moz-border-radius: 100%;
            border-radius: 100%;
            -moz-transform: translateY(-100%) translateZ(0);
            transform: translateY(-100%) translateZ(0);
        }
        100% {
            -moz-border-radius: 0;
            border-radius: 0;
            -moz-transform: translateY(0) translateZ(0);
            transform: translateY(0) translateZ(0);
        }
    }
    @-o-keyframes rb-checkbox_rounded-ripple-in {
        0% {
            border-radius: 100%;
            transform: translateY(-100%) translateZ(0);
        }
        100% {
            border-radius: 0;
            transform: translateY(0) translateZ(0);
        }
    }
    @keyframes rb-checkbox_rounded-ripple-in {
        0% {
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
            -webkit-transform: translateY(-100%) translateZ(0);
            -moz-transform: translateY(-100%) translateZ(0);
            transform: translateY(-100%) translateZ(0);
        }
        100% {
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            border-radius: 0;
            -webkit-transform: translateY(0) translateZ(0);
            -moz-transform: translateY(0) translateZ(0);
            transform: translateY(0) translateZ(0);
        }
    }
</style>
