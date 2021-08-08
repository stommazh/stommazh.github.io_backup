<script>
	export let value = '';
	export let placeHolder = '';
	export let name = '';
	export let message = '';
	export {className as class};
	let className = '';
</script>

<div class={`cb-form-group ${className}`}>
	<div class='cb-input cb-input_light'>
		<div class='cb-input_light-box'>
			<input type='text' name={name}
						 bind:value={value}
						 placeholder={placeHolder} aria-label={placeHolder}>
			<div class='cb-input_light-line'></div>
		</div>
		<div class='cb-input_light-message'>{message}</div>
	</div>
</div>

<style>
    /*! CSS Used from: https://cuberto.com/assets/css/main.css?v=4.5.15 */
    input {
        font-family: sans-serif;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }
    input {
        overflow: visible;
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
    input {
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
    .cb-form-group {
        margin: 0 0 45px 0;
    }
    @media (min-width: 768px) {
        .cb-form-group {
            margin: 0 0 70px 0;
        }
    }
    .cb-input {
        display: inline;
    }
    .cb-input_light {
        position: relative;
        display: block;
        line-height: 0;
        contain: content;
    }
    .cb-input_light-line {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -3px;
        height: 59px;
        width: 300%;
        -webkit-transform: translateX(-66.66%);
        -moz-transform: translateX(-66.66%);
        -ms-transform: translateX(-66.66%);
        -o-transform: translateX(-66.66%);
        transform: translateX(-66.66%);
        opacity: 0.1;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDYwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIGQ9Ik0wLDU2LjVjMCwwLDI5OC42NjYsMCwzOTkuMzMzLDBDNDQ4LjMzNiw1Ni41LDUxMy45OTQsNDYsNTk3LDQ2Yzc3LjMyNywwLDEzNSwxMC41LDIwMC45OTksMTAuNWM5NS45OTYsMCw0MDIuMDAxLDAsNDAyLjAwMSwwIj48L3BhdGg+PC9zdmc+');
        background-position: center bottom;
        pointer-events: none;
        -webkit-transition: opacity 0.4s,
        -webkit-transform 0s cubic-bezier(0, 0.25, 0.5, 1);
        transition: opacity 0.4s, -webkit-transform 0s cubic-bezier(0, 0.25, 0.5, 1);
        -o-transition: opacity 0.4s, -o-transform 0s cubic-bezier(0, 0.25, 0.5, 1);
        -moz-transition: transform 0s cubic-bezier(0, 0.25, 0.5, 1), opacity 0.4s,
        -moz-transform 0s cubic-bezier(0, 0.25, 0.5, 1);
        transition: transform 0s cubic-bezier(0, 0.25, 0.5, 1), opacity 0.4s;
        transition: transform 0s cubic-bezier(0, 0.25, 0.5, 1), opacity 0.4s,
        -webkit-transform 0s cubic-bezier(0, 0.25, 0.5, 1),
        -moz-transform 0s cubic-bezier(0, 0.25, 0.5, 1),
        -o-transform 0s cubic-bezier(0, 0.25, 0.5, 1);
    }
    @media (min-width: 768px) {
        .cb-input_light-line {
            height: 85px;
        }
    }
    .cb-input_light-box {
        position: relative;
        overflow: hidden;
    }
    .cb-input_light-message {
        margin: 15px 0 0 0;
        color: #eb4242;
        font-size: 16px;
        line-height: 25px;
    }
    .cb-input_light-message:empty {
        display: none;
    }
    .cb-input_light input {
        position: relative;
        margin: 0;
        padding: 15px 0;
        width: 100%;
        z-index: 1;
        color: #000;
        background: 0 0;
        border: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        outline: 0;
        resize: none;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.03em;
        line-height: 100%;
        -webkit-transition: all 0.3s, height 0s;
        -o-transition: all 0.3s, height 0s;
        -moz-transition: all 0.3s, height 0s;
        transition: all 0.3s, height 0s;
    }
    @media (min-width: 768px) {
        .cb-input_light input {
            padding: 21px 0;
            font-size: 35px;
        }
    }
    .cb-input_light input::-webkit-input-placeholder {
        color: #ccc;
        -webkit-transition: color 0.2s;
        transition: color 0.2s;
    }
    .cb-input_light input:-moz-placeholder {
        color: #ccc;
        -moz-transition: color 0.2s;
        transition: color 0.2s;
    }
    .cb-input_light input::-moz-placeholder {
        color: #ccc;
        -moz-transition: color 0.2s;
        transition: color 0.2s;
    }
    .cb-input_light input:-ms-input-placeholder {
        color: #ccc;
        -ms-transition: color 0.2s;
        transition: color 0.2s;
    }
    .cb-input_light input::-ms-input-placeholder {
        color: #ccc;
        -ms-transition: color 0.2s;
        transition: color 0.2s;
    }
    .cb-input_light input::placeholder {
        color: #ccc;
        -webkit-transition: color 0.2s;
        -o-transition: color 0.2s;
        -moz-transition: color 0.2s;
        transition: color 0.2s;
    }
    .cb-input_light input:hover + .cb-input_light-line {
        opacity: 0.6;
    }
    .cb-input_light input:focus::-webkit-input-placeholder {
        color: #b3b3b3;
    }
    .cb-input_light input:focus:-moz-placeholder {
        color: #b3b3b3;
    }
    .cb-input_light input:focus::-moz-placeholder {
        color: #b3b3b3;
    }
    .cb-input_light input:focus:-ms-input-placeholder {
        color: #b3b3b3;
    }
    .cb-input_light input:focus::-ms-input-placeholder {
        color: #b3b3b3;
    }
    .cb-input_light input:focus::placeholder {
        color: #b3b3b3;
    }
    .cb-input_light input:focus + .cb-input_light-line {
        opacity: 1;
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0);
        -webkit-transition-duration: 0.8s, 0.4s;
        -moz-transition-duration: 0.8s, 0.4s;
        -o-transition-duration: 0.8s, 0.4s;
        transition-duration: 0.8s, 0.4s;
    }
    .cb-input_light input:invalid {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        outline: 0;
    }
    .cb-input_light input:disabled {
        opacity: 0.4;
        pointer-events: none;
    }

</style>
