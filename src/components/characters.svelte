<script lang='ts'>
	const characters: { name: string, src: string }[] = [
		{
			name: 'Xô',
			src: 'xo.png'
		},
		{
			name: 'Ông Năm',
			src: 'nam.png'
		},
		{
			name: 'Nơ',
			src: 'no.png'
		},
		{
			name: 'Gấu AK',
			src: 'gau.png'
		},
		{
			name: 'Gà',
			src: 'ga.png'
		},
		{
			name: 'Hưu Cao Cổ',
			src: 'cao.png'
		}
	];
</script>
<section id='characters'>
	<h2 class='text-6xl font-black py-30 text-transparent '>
		Thỏ và đồng bọn
	</h2>
	<div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
		{#each characters as character}
			<div class='flex flex-col justify-items-center items-center'>
				<picture class='rounded-3xl w-40 h-40 bg-black mb-5'>
					<img src='/images/{character.src}' alt='{character.name}'>
					<source srcset='/images/{character.src}' alt='{character.name}'>
				</picture>
				<span>
				{character.name}
		</span>
			</div>
		{/each}
	</div>
	<div class='rb-rcfeed-more'><a class='rb-btn rb-btn_more' href='#'><span class='rb-btn_more-title'><span
		data-text='Khám phá động thỏ'>Khám phá động thỏ</span></span><span class='rb-btn_more-ripple'><span></span></span></a>
	</div>
</section>
<style lang='scss'>
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
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

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: underline;
  }

  a:focus, a:hover {
    color: inherit;
    text-decoration: none;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }

  @media print {
    *, ::after, ::before {
      text-shadow: none !important;
      -webkit-box-shadow: none !important;
      -moz-box-shadow: none !important;
      box-shadow: none !important;
    }
    a, a:visited {
      text-decoration: underline;
    }
  }

  .rb-btn {
    display: inline;
  }

  .rb-btn_more {
    position: relative;
    display: inline-block;
    height: auto;
    margin: 0;
    padding: 0;
    color: inherit;
    background: 0 0;
    border: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    outline: 0 !important;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    text-align: inherit;
    text-transform: inherit;
    text-indent: inherit;
    text-decoration: none;
  }

  .rb-btn_more:focus, .rb-btn_more:hover {
    text-decoration: none;
  }

  .rb-btn_more {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 57px;
    padding: 0 32px;
    -webkit-border-radius: 47px;
    -moz-border-radius: 47px;
    border-radius: 47px;
  }

  @media (min-width: 1200px) {
    .rb-btn_more {
      height: 72px;
      padding: 0 40px;
      min-width: 170px;
      -webkit-border-radius: 60px;
      -moz-border-radius: 60px;
      border-radius: 60px;
    }
  }

  .rb-btn_more:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border: 1px rgba(0, 0, 0, .1) solid;
    -webkit-border-radius: inherit;
    -moz-border-radius: inherit;
    border-radius: inherit;
    -webkit-transition: border-color .2s;
    -o-transition: border-color .2s;
    -moz-transition: border-color .2s;
    transition: border-color .2s;
  }

  .rb-btn_more[data-magnetic]:before {
    content: "";
    display: block;
    position: absolute;
    top: -40px;
    left: -40px;
    right: -40px;
    bottom: -40px;
  }

  .rb-btn_more-title {
    position: relative;
    top: -1px;
    display: block;
    overflow: hidden;
    z-index: 2;
  }

  .rb-btn_more-title span {
    display: block;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    transform-origin: left top;
    -webkit-transition: color .2s, -webkit-transform .4s;
    transition: color .2s, -webkit-transform .4s;
    -o-transition: color .2s, -o-transform .4s;
    -moz-transition: color .2s, transform .4s, -moz-transform .4s;
    transition: color .2s, transform .4s;
    transition: color .2s, transform .4s, -webkit-transform .4s, -moz-transform .4s, -o-transform .4s;
  }

  @media (min-width: 1200px) {
    .rb-btn_more-title span {
      font-size: 18px;
    }
  }

  .rb-btn_more-title span:after {
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
    -webkit-transition: -webkit-transform .4s;
    transition: -webkit-transform .4s;
    -o-transition: -o-transform .4s;
    -moz-transition: transform .4s, -moz-transform .4s;
    transition: transform .4s;
    transition: transform .4s, -webkit-transform .4s, -moz-transform .4s, -o-transform .4s;
  }

  .rb-btn_more-ripple {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-border-radius: inherit;
    -moz-border-radius: inherit;
    border-radius: inherit;
  }

  .rb-btn_more-ripple span {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-transform: translateY(100%);
    -moz-transform: translateY(100%);
    -ms-transform: translateY(100%);
    -o-transform: translateY(100%);
    transform: translateY(100%);
    background: currentColor;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: -webkit-transform .5s cubic-bezier(.4, 0, 0, 1), -webkit-border-radius .5s cubic-bezier(.4, 0, 0, 1);
    transition: -webkit-transform .5s cubic-bezier(.4, 0, 0, 1), -webkit-border-radius .5s cubic-bezier(.4, 0, 0, 1);
    -o-transition: border-radius .5s cubic-bezier(.4, 0, 0, 1), -o-transform .5s cubic-bezier(.4, 0, 0, 1);
    -moz-transition: transform .5s cubic-bezier(.4, 0, 0, 1), border-radius .5s cubic-bezier(.4, 0, 0, 1), -moz-transform .5s cubic-bezier(.4, 0, 0, 1), -moz-border-radius .5s cubic-bezier(.4, 0, 0, 1);
    transition: transform .5s cubic-bezier(.4, 0, 0, 1), border-radius .5s cubic-bezier(.4, 0, 0, 1);
    transition: transform .5s cubic-bezier(.4, 0, 0, 1), border-radius .5s cubic-bezier(.4, 0, 0, 1), -webkit-transform .5s cubic-bezier(.4, 0, 0, 1), -moz-transform .5s cubic-bezier(.4, 0, 0, 1), -o-transform .5s cubic-bezier(.4, 0, 0, 1), -webkit-border-radius .5s cubic-bezier(.4, 0, 0, 1), -moz-border-radius .5s cubic-bezier(.4, 0, 0, 1);
  }

  @media (pointer: fine) {
    .rb-btn_more:hover .rb-btn_more-title span {
      color: #fff;
      -webkit-transform: translateY(-150%) skewY(-7deg);
      -moz-transform: translateY(-150%) skewY(-7deg);
      -ms-transform: translateY(-150%) skewY(-7deg);
      -o-transform: translateY(-150%) skewY(-7deg);
      transform: translateY(-150%) skewY(-7deg);
    }
  }

  @media (pointer: fine) {
    .rb-btn_more:hover .rb-btn_more-title span:after {
      -webkit-transform: skewY(7deg);
      -moz-transform: skewY(7deg);
      -ms-transform: skewY(7deg);
      -o-transform: skewY(7deg);
      transform: skewY(7deg);
    }
  }

  @media (pointer: fine) {
    .rb-btn_more:hover .rb-btn_more-ripple span {
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      border-radius: 0;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
      -webkit-transition-duration: 0s, 0s;
      -moz-transition-duration: 0s, 0s;
      -o-transition-duration: 0s, 0s;
      transition-duration: 0s, 0s;
      -webkit-animation: rb-checkbox_rounded-ripple-in .5s cubic-bezier(.4, 0, 0, 1);
      -moz-animation: rb-checkbox_rounded-ripple-in .5s cubic-bezier(.4, 0, 0, 1);
      -o-animation: rb-checkbox_rounded-ripple-in .5s cubic-bezier(.4, 0, 0, 1);
      animation: rb-checkbox_rounded-ripple-in .5s cubic-bezier(.4, 0, 0, 1);
    }
  }

  .rb-rcfeed-more {
    padding: 60px 0 0 0;
    text-align: center;
  }

  @media (min-width: 768px) {
    .rb-rcfeed-more {
      padding: 80px 0 0 0;
    }
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
