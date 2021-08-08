<svelte:head>
	{#if active}
		<style>body {overflow: hidden;}</style>
	{/if}
</svelte:head>
<header class='flex justify-between px-5 md:px-14 md:py-8' class:menu-opened={active}>
	<div class='w-20 h-20 z-40'>
		<a href='/' class='block'>
			<img src={logo} alt='Thỏ 7 Màu' />
		</a>
	</div>

	<div class='flex items-center'>
		<div class='cb-menu-toggle z-30'>
			<button class='rb-btn_menu inline-flex items-center relative' class:active={active} aria-label='menu'
							on:click={toggleMenu}>
				<span class='hidden md:inline-block mr-5 tracking-tight text-xl font-light'>menu</span>
				<span class='rb-btn_menu-box relative inline-block'>
					<span></span>
					<span></span>
				</span>
			</button>
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
									 class='{segment === url ? "current" : ""}'
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

<style lang='scss'>


  .cb-menu-toggle {
    position: fixed;
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

  .rb-btn_menu {

    &.active .rb-btn_menu-box {
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
  }

  .rb-btn_menu-box {
    width: 25px;

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
			url: '/about'
		},
		{
			name: 'Công việc',
			url: '/service'
		},
		{
			name: 'Liên hệ',
			url: '/contact'
		}
	];

	const toggleMenu = () =>
		{
			active = !active;
			toggleFade();
		};

</script>
