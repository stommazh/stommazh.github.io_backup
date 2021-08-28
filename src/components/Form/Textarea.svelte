<script>
	export let value = '';
	export let placeHolder = '';
	export let name = '';

	let className = '';
	export {className as class};
</script>

<div class={`rb-form-group ${className}`}>
	<div class='rb-input rb-input_light'>
		<div class='rb-input_light-box'><textarea name={name} placeholder={placeHolder}
																							aria-label={placeHolder}
																							bind:value={value}
																							style='overflow: hidden; overflow-wrap: break-word; height: 93px;'></textarea>
			<div class='rb-input_light-line'></div>
		</div>
	</div>
</div>

<style>
    /*! CSS Used from: https://cuberto.com/assets/css/main.css?v=4.5.15 */
    textarea {
        font-family: sans-serif;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    textarea {
        overflow: auto;
    }

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    :after, :before {
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

    textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    @media print {
        *, ::after, ::before {
            text-shadow: none !important;
            -webkit-box-shadow: none !important;
            -moz-box-shadow: none !important;
            box-shadow: none !important;
        }
    }

    .rb-form-group {
        margin: 0 0 45px 0;
    }

    @media (min-width: 768px) {
        .rb-form-group {
            margin: 0 0 70px 0;
        }
    }

    .rb-input {
        display: inline;
    }

    .rb-input_light {
        position: relative;
        display: block;
        line-height: 0;
        contain: content;
    }

    .rb-input_light-line {
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
        opacity: .1;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDYwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIGQ9Ik0wLDU2LjVjMCwwLDI5OC42NjYsMCwzOTkuMzMzLDBDNDQ4LjMzNiw1Ni41LDUxMy45OTQsNDYsNTk3LDQ2Yzc3LjMyNywwLDEzNSwxMC41LDIwMC45OTksMTAuNWM5NS45OTYsMCw0MDIuMDAxLDAsNDAyLjAwMSwwIj48L3BhdGg+PC9zdmc+");
        background-position: center bottom;
        pointer-events: none;
        -webkit-transition: opacity .4s, -webkit-transform 0s cubic-bezier(0, .25, .5, 1);
        transition: opacity .4s, -webkit-transform 0s cubic-bezier(0, .25, .5, 1);
        -o-transition: opacity .4s, -o-transform 0s cubic-bezier(0, .25, .5, 1);
        -moz-transition: transform 0s cubic-bezier(0, .25, .5, 1), opacity .4s, -moz-transform 0s cubic-bezier(0, .25, .5, 1);
        transition: transform 0s cubic-bezier(0, .25, .5, 1), opacity .4s;
        transition: transform 0s cubic-bezier(0, .25, .5, 1), opacity .4s, -webkit-transform 0s cubic-bezier(0, .25, .5, 1), -moz-transform 0s cubic-bezier(0, .25, .5, 1), -o-transform 0s cubic-bezier(0, .25, .5, 1);
    }

    @media (min-width: 768px) {
        .rb-input_light-line {
            height: 85px;
        }
    }

    .rb-input_light-box {
        position: relative;
        overflow: hidden;
    }

    .rb-input_light textarea {
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
        letter-spacing: -.03em;
        line-height: 100%;
        -webkit-transition: all .3s, height 0s;
        -o-transition: all .3s, height 0s;
        -moz-transition: all .3s, height 0s;
        transition: all .3s, height 0s;
    }

    @media (min-width: 768px) {
        .rb-input_light textarea {
            padding: 21px 0;
            font-size: 35px;
        }
    }

    .rb-input_light textarea::-webkit-input-placeholder {
        color: #ccc;
        -webkit-transition: color .2s;
        transition: color .2s;
    }

    .rb-input_light textarea:-moz-placeholder {
        color: #ccc;
        -moz-transition: color .2s;
        transition: color .2s;
    }

    .rb-input_light textarea::-moz-placeholder {
        color: #ccc;
        -moz-transition: color .2s;
        transition: color .2s;
    }

    .rb-input_light textarea:-ms-input-placeholder {
        color: #ccc;
        -ms-transition: color .2s;
        transition: color .2s;
    }

    .rb-input_light textarea::-ms-input-placeholder {
        color: #ccc;
        -ms-transition: color .2s;
        transition: color .2s;
    }

    .rb-input_light textarea::placeholder {
        color: #ccc;
        -webkit-transition: color .2s;
        -o-transition: color .2s;
        -moz-transition: color .2s;
        transition: color .2s;
    }

    .rb-input_light textarea:hover + .rb-input_light-line {
        opacity: .6;
    }

    .rb-input_light textarea:focus::-webkit-input-placeholder {
        color: #b3b3b3;
    }

    .rb-input_light textarea:focus:-moz-placeholder {
        color: #b3b3b3;
    }

    .rb-input_light textarea:focus::-moz-placeholder {
        color: #b3b3b3;
    }

    .rb-input_light textarea:focus:-ms-input-placeholder {
        color: #b3b3b3;
    }

    .rb-input_light textarea:focus::-ms-input-placeholder {
        color: #b3b3b3;
    }

    .rb-input_light textarea:focus::placeholder {
        color: #b3b3b3;
    }

    .rb-input_light textarea:focus + .rb-input_light-line {
        opacity: 1;
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0);
        -webkit-transition-duration: .8s, .4s;
        -moz-transition-duration: .8s, .4s;
        -o-transition-duration: .8s, .4s;
        transition-duration: .8s, .4s;
    }

    .rb-input_light textarea:invalid {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        outline: 0;
    }

    .rb-input_light textarea:disabled {
        opacity: .4;
        pointer-events: none;
    }

    .rb-input_light textarea {
        height: 60px;
        font-size: 17px;
        line-height: 120%;
    }

    @media (min-width: 768px) {
        .rb-input_light textarea {
            height: 93px;
            font-size: 26px;
        }
    }

    .rb-input_light textarea::-webkit-input-placeholder {
        font-size: 24px;
    }

    .rb-input_light textarea:-moz-placeholder {
        font-size: 24px;
    }

    .rb-input_light textarea::-moz-placeholder {
        font-size: 24px;
    }

    .rb-input_light textarea:-ms-input-placeholder {
        font-size: 24px;
    }

    .rb-input_light textarea::-ms-input-placeholder {
        font-size: 24px;
    }

    .rb-input_light textarea::placeholder {
        font-size: 24px;
    }

    @media (min-width: 768px) {
        .rb-input_light textarea::-webkit-input-placeholder {
            font-size: 35px;
        }

        .rb-input_light textarea:-moz-placeholder {
            font-size: 35px;
        }

        .rb-input_light textarea::-moz-placeholder {
            font-size: 35px;
        }

        .rb-input_light textarea:-ms-input-placeholder {
            font-size: 35px;
        }

        .rb-input_light textarea::-ms-input-placeholder {
            font-size: 35px;
        }

        .rb-input_light textarea::placeholder {
            font-size: 35px;
        }
    }
</style>
