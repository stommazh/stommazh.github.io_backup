<svelte:head>
	{#if active}
		<style>body {
        overflow: hidden;
    }
		</style>
	{/if}
</svelte:head>
<header class='flex justify-between px-5 md:px-14 md:py-8' class:menu-opened={active}>
	<div class='w-20 h-20 z-40'>
		<a href='/' class='block'>
			<img src={logo} alt='Thỏ 7 Màu' />
		</a>
	</div>

	<div class='flex items-center'>
		<div class='rb-menu-toggle'>
			<button class='rb-btn_menu inline-flex items-center relative' class:active={active} aria-label='menu'
							on:click={toggleMenu}>
				<span class='hidden md:inline-block mr-5 tracking-tight text-xl font-light'>menu</span>
			</button>
			<span class='rb-btn_menu-box sm:right-8 relative inline-block z-30' class:active={active} on:click={toggleMenu}>
					<span></span>
					<span></span>
				</span>
			<div class='rb-menu-contact'>
				<a class='rb-btn rb-btn_contact' href='#contact' data-cursor='-exclusion'
					 aria-label='Get in touch'>
					<svg class='rb-svgsprite -chat' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 30' id='chat'>
						<path
							d='M16 26c8.84 0 16-5.82 16-13S24.84 0 16 0 0 5.82 0 13a11.72 11.72 0 004.12 8.71L3.33 30l7.53-4.69A19.11 19.11 0 0016 26z'></path>
					</svg>
				</a>
			</div>
		</div>
		<div class='rb-menu_box' style="display: {$fadeSpring ? 'block' : 'none'}">
			<div class='rb-menu_backdrop fixed inset-0 z-10'
					 on:click={toggleMenu}
					 style="opacity: {$fadeSpring}; display: {$fadeSpring ? 'block' : 'none'}">
			</div>
			<div class='menu-container px-20 py-12 bg-white fixed top-0 right-0 w-screen h-screen z-20 flex flex-col'>
				<div class='menu-body flex items-center justify-center h-full' style='opacity: {$fadeSpring}'>
					<div class='flex w-full'>
						<div class='social'>
							<p class='pb-10'>
								Social
							</p>
							<a href='https://www.facebook.com/ThoBayMau' target='_blank'>Facebook</a>
							<a href='https://www.youtube.com/channel/UCqb-IU-JKgCg2aqZw3gJafQ' target='_blank'>Youtube</a>
							<a href='https://www.instagram.com/_thobaymau_/' target='_blank'>Instagram</a>
							<a href='https://www.tiktok.com/@thobaymau.vn' target='_blank'>Tiktok</a>

						</div>
						<div class='pages'>
							<p class='pb-7'>
								Menu
							</p>
							{#each pages as { name, url }}
								<a href={url}
									 on:click={toggleMenu}>{name}</a>
							{/each}

						</div>
					</div>
				</div>
				<div class='menu-footer' style='opacity: {$fadeSpring}'>
					<p class='pb-3'>
						Liên hệ
					</p>
					<a href='mailto:contact@thobaymau.vn'>quangcao@thobaymau.vn</a>
				</div>
			</div>
		</div>
	</div>
</header>

<script lang='ts'>
	import { page } from '$app/stores';
	import logo from '/static/logo.svg';
	import { spring } from 'svelte/motion';

	export let segment;

	let active = false;

	const fadeSpring = spring(0, { stiffness: 0.1, damping: 0.5 });

	const toggleFade = () => fadeSpring.update(val => (val ? 0 : 1));

	const pages = [
		{
			name: 'Giới thiệu',
			url: '#about'
		},
		{
			name: 'Dự án',
			url: '#project'
		},
		{
			name: 'Liên hệ',
			url: '#contact'
		}
	];

	const toggleMenu = () =>
		{
			active = !active;
			toggleFade();
		};

</script>

<style lang='scss'>
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  svg:not(:root) {
    overflow: hidden;
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
  }

  a:focus, a:hover {
    color: inherit;
    text-decoration: none;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }

  svg {
    vertical-align: middle;
  }

  @media print {
    *, ::after, ::before {
      text-shadow: none !important;
      -webkit-box-shadow: none !important;
      -moz-box-shadow: none !important;
      box-shadow: none !important;
    }
  }

  .rb-svgsprite {
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: middle;
  }

  .rb-menu-contact {
    display: none;
  }

  @media (min-width: 1200px) {
    .rb-menu-contact {
      display: block;
      position: fixed;
      right: 45px;
      bottom: 40px;
      z-index: 95;
    }
  }

  .rb-menu-contact:hover {
    z-index: 100;
  }

  .rb-btn {
    display: inline;
  }

  .rb-btn_contact {
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

  .rb-btn_contact:focus, .rb-btn_contact:hover {
    text-decoration: none;
  }

  .rb-btn_contact {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    width: 64px;
    height: 64px;
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
    text-align: center;
    color: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: color .2s, opacity .5s;
    -o-transition: color .2s, opacity .5s;
    -moz-transition: color .2s, opacity .5s;
    transition: color .2s, opacity .5s;
  }

  @media (min-width: 1600px) {
    .rb-btn_contact {
      width: 80px;
      height: 80px;
    }
  }

  .rb-btn_contact:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    -webkit-border-radius: inherit;
    -moz-border-radius: inherit;
    border-radius: inherit;
    -webkit-transition: background-color .2s, -webkit-transform .35s cubic-bezier(.175, .885, .32, 1.275);
    transition: background-color .2s, -webkit-transform .35s cubic-bezier(.175, .885, .32, 1.275);
    -o-transition: background-color .2s, -o-transform .35s cubic-bezier(.175, .885, .32, 1.275);
    -moz-transition: transform .35s cubic-bezier(.175, .885, .32, 1.275), background-color .2s, -moz-transform .35s cubic-bezier(.175, .885, .32, 1.275);
    transition: transform .35s cubic-bezier(.175, .885, .32, 1.275), background-color .2s;
    transition: transform .35s cubic-bezier(.175, .885, .32, 1.275), background-color .2s, -webkit-transform .35s cubic-bezier(.175, .885, .32, 1.275), -moz-transform .35s cubic-bezier(.175, .885, .32, 1.275), -o-transform .35s cubic-bezier(.175, .885, .32, 1.275);
  }

  .rb-btn_contact svg {
    position: relative;
    font-size: 24px;
    line-height: 0;
  }

  @media (min-width: 1600px) {
    .rb-btn_contact svg {
      font-size: 28px;
    }
  }

  .rb-btn_contact:focus, .rb-btn_contact:hover {
    color: #fff;
  }

  .rb-btn_contact:focus:before, .rb-btn_contact:hover:before {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }

  .rb-btn_contact:active:before {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }


  .rb-menu-toggle {
    top: 40px;
    right: 40px;
  }

  .menu-container {
    background-color: #fff;

    .menu-body, .menu-footer {
      will-change: opacity;
    }

    p {
      color: rgba(0, 0, 0, .3);
      font-size: 16px;
    }

    .social {
      flex: 0.8;

      a {
        @apply pb-3;
      }
    }

    .pages {
      flex: 1.2;
    }

    a {
      display: block;
    }

    .pages {
      a {
        @apply text-4xl;
        @apply pb-4;
      }
    }
  }

  .menu-opened {
    .menu-container {
      animation: rb-menu_fade_in 0.8s;
    }
  }

  .menu-container {
    @screen md {
      width: 640px;
    }
    animation: rb-menu_fade_out 0.8s;
  }

  @variant hover, focus {
    .rb-btn_menu-box {

    }
  }

  a {
    color: black;
  }

  .rb-menu_backdrop {
    background: rgba(238, 238, 238, .7);
    pointer-events: auto;
    opacity: 0;
  }

  .rb-btn_menu-box.active {
    span:first-child {
      animation: rb-btn_menu-open-top .75s;
      top: 4px;
      transform: rotate(45deg) scaleX(1);
      transition-duration: 0s, 0s;
    }

    span:last-child {
      animation: rb-btn_menu-open-bottom .75s;
      top: -3px;
      transform: rotate(-45deg) scaleX(1);
      transition-duration: 0s, 0s;
    }

  }

  .rb-btn_menu-box {
    width: 25px;
    position: fixed;
    margin-top: 5px;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -20px;
      right: -20px;
      left: -20px;
      bottom: -20px;
    }

    span {
      position: relative;
      display: block;
      width: 100%;
      height: 2px;
      margin: 5px 0;
      top: 0;
      z-index: 1;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      backface-visibility: hidden;
      background: currentColor;
      transition: top .3s .3s, transform .3s;
    }
  }

  @keyframes rb-menu_fade_in {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes rb-menu_fade_out {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    70% {
      transform: translateX(70%);
      opacity: .9;
    }
    100% {
      transform: translateX(100%);
      opacity: .8;
    }
  }

  @keyframes rb-menu_backdrop_back {
    0% {
      z-index: 198;
    }
    99% {
      z-index: 198;
    }
    100% {
      z-index: -99;
    }
  }

  @keyframes rb-btn_menu-open-top {
    0% {
      opacity: 1;
      top: 0;
      left: 0;
      -webkit-transform: rotate(0) scaleX(1);
      -moz-transform: rotate(0) scaleX(1);
      -o-transform: rotate(0) scaleX(1);
      transform: rotate(0) scaleX(1);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center
    }
    30% {
      opacity: 1;
      top: 0;
      left: 0;
      -webkit-transform: rotate(0) scaleX(0);
      -moz-transform: rotate(0) scaleX(0);
      -o-transform: rotate(0) scaleX(0);
      transform: rotate(0) scaleX(0)
    }
    30.1% {
      opacity: 0;
      top: 0;
      left: 0;
      -webkit-transform: rotate(0) scaleX(0);
      -moz-transform: rotate(0) scaleX(0);
      -o-transform: rotate(0) scaleX(0);
      transform: rotate(0) scaleX(0)
    }
    31% {
      opacity: 1;
      top: -5px;
      left: 3px;
      -webkit-transform: rotate(45deg) scaleX(0);
      -moz-transform: rotate(45deg) scaleX(0);
      -o-transform: rotate(45deg) scaleX(0);
      transform: rotate(45deg) scaleX(0)
    }
    100%,
    80% {
      opacity: 1;
      top: -5px;
      left: 3px;
      -webkit-transform: rotate(45deg) scaleX(1);
      -moz-transform: rotate(45deg) scaleX(1);
      -o-transform: rotate(45deg) scaleX(1);
      transform: rotate(45deg) scaleX(1);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center
    }
  }

  @keyframes rb-btn_menu-open-bottom {
    0% {
      opacity: 1;
      top: 0;
      left: 0;
      -webkit-transform: rotate(0) scaleX(1);
      -moz-transform: rotate(0) scaleX(1);
      -o-transform: rotate(0) scaleX(1);
      transform: rotate(0) scaleX(1);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center
    }
    50% {
      opacity: 1;
      top: 0;
      left: 0;
      -webkit-transform: rotate(0) scaleX(0);
      -moz-transform: rotate(0) scaleX(0);
      -o-transform: rotate(0) scaleX(0);
      transform: rotate(0) scaleX(0)
    }
    50.1% {
      opacity: 0;
      top: 0;
      left: 0;
      -webkit-transform: rotate(0) scaleX(0);
      -moz-transform: rotate(0) scaleX(0);
      -o-transform: rotate(0) scaleX(0);
      transform: rotate(0) scaleX(0)
    }
    51%,
    55% {
      opacity: 1;
      top: -12px;
      left: -4px;
      -webkit-transform: rotate(-45deg) scaleX(0);
      -moz-transform: rotate(-45deg) scaleX(0);
      -o-transform: rotate(-45deg) scaleX(0);
      transform: rotate(-45deg) scaleX(0)
    }
    100% {
      opacity: 1;
      top: -12px;
      left: -4px;
      -webkit-transform: rotate(-45deg) scaleX(1);
      -moz-transform: rotate(-45deg) scaleX(1);
      -o-transform: rotate(-45deg) scaleX(1);
      transform: rotate(-45deg) scaleX(1);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center
    }
  }

</style>
