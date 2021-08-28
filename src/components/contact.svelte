<script context='module' lang='ts'>
	import { variables } from '$lib/variables';
</script>

<script lang='ts'>
	import { onMount } from 'svelte';
	import Input from '../components/Form/Input.svelte';
	import Checkbox from '../components/Form/Checkbox.svelte';
	import { writable } from 'svelte/store';
	import Textarea from '../components/Form/Textarea.svelte';
	import isValidPhoneNumber from 'libphonenumber-js';

	const form = writable({
		name: '',
		email: '',
		phone: '',
		content: '',
		interest: [
			{
				label: 'Quảng cáo',
				value: false
			},
			{
				label: 'Sản phẩm',
				value: false
			},
			{
				label: 'Khác',
				value: false
			}
		]
	});
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let isValidEmail, isValidMessage, isValidPhone, isValidName, isValidInterest, isFormValid;
	let emailError, messageError, phoneError, nameError, interestError;

	$: {
		emailError = $form.email.trim().length ? (emailRegex.test($form.email) ? '' : '') : '';
		isValidEmail = !emailError;
		isValidMessage = !!$form.content.trim().length;
		isValidPhone = isValidPhoneNumber($form.phone, 'VN');
		isValidName = !!($form.name.trim().length > 2);
		isFormValid = isValidMessage && isValidEmail && isValidPhone && isValidName;
	}

	function checkName()
		{
			nameError = $form.content.trim().length ? '' : 'Vui lòng cho biết tên của bạn';
		}

	function checkPhone()
		{
			phoneError = $form.phone.trim().length ? (isValidPhoneNumber($form.phone, 'VN') ? '' : 'Số điện thoại này dường như không tồn tại') : 'Vui lòng điền số điện thoại liên hệ';
		}

	function checkEmail()
		{
			const formattedEmail = $form.email.trim();
			emailError = formattedEmail.length ? (emailRegex.test(formattedEmail) ? '' : 'Vui lòng kiểm tra lại địa chỉ email này') : 'Vui lòng điền email của bạn';
		}

		function checkInterest()
			{
				interestError = $form.interest.filter(interest => interest.value).length ? '' : '';
			}

	// onMount(async () =>
	// {
	// 	window.grecaptcha.ready(() =>
	// 	{
	// 		grecaptcha.render('recaptcha-id', { sitekey: YOUR_SITE_KEY });
	// 	});
	// });

	// function onSubmit(token)
	// 	{
	// 		document.getElementById('demo-form').submit();
	// 	}

</script>

<section class='request-form pb-30' id='contact'>
	<h1 class='text-6xl font-black py-12 text-transparent text-left'>
		Liên hệ
	</h1>
	<p class='text-2xl text-black-dim mb-10'>
		Tôi đang quan tâm đến...
	</p>
	<div class='mb-20'>
		{#each $form.interest as { value, label }, i}
			<Checkbox bind:checked={value} label={label} class='mr-5 mb-5' />
		{/each}
	</div>
	<Input bind:value={$form.name} placeHolder='Họ và tên' name='name' on:blur={checkName} />
	<Input bind:value={$form.phone} placeHolder='Số điện thoại' name='phone' />
	<Input bind:value={$form.email} placeHolder='Email' name='email' />
	<Textarea bind:value={$form.content} placeHolder='Nội dung liên hệ' name='message' />

	<div class='rb-form-submit'>
		<button class='rb-btn rb-btn_send' disabled={!isFormValid}>
			<span data-text='Gởi đi'>Gửi đi</span>
		</button>
	</div>

</section>

<style lang='scss'>
  .request-form {
    margin: 70px 0 0;
    width: 100%;

    @screen lg {
      max-width: 950px;
    }
  }

  /*! CSS Used from: https://cuberto.com/assets/css/main.css?v=4.5.15 */
  button {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button {
    overflow: visible;
  }

  button {
    text-transform: none;
  }

  [type=submit], button {
    -webkit-appearance: button;
  }

  [type=submit]::-moz-focus-inner, button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type=submit]:-moz-focusring, button:-moz-focusring {
    outline: 1px dotted ButtonText;
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

  button {
    -webkit-tap-highlight-color: transparent;
  }

  button {
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

  .rb-form-submit {
    margin: 10px 0 0 0;
  }

  .rb-btn_send {
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
    text-align: inherit;
    text-transform: inherit;
    text-indent: inherit;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -.01em;
    -webkit-transition: opacity .4s;
    -o-transition: opacity .4s;
    -moz-transition: opacity .4s;
    transition: opacity .4s;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -15px;
      left: -15px;
      right: -15px;
      bottom: -15px;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      background: currentColor;
      -webkit-transition: -webkit-transform .7s cubic-bezier(.19, 1, .22, 1);
      transition: -webkit-transform .7s cubic-bezier(.19, 1, .22, 1);
      -o-transition: -o-transform .7s cubic-bezier(.19, 1, .22, 1);
      -moz-transition: transform .7s cubic-bezier(.19, 1, .22, 1), -moz-transform .7s cubic-bezier(.19, 1, .22, 1);
      transition: transform .7s cubic-bezier(.19, 1, .22, 1);
      transition: transform .7s cubic-bezier(.19, 1, .22, 1), -webkit-transform .7s cubic-bezier(.19, 1, .22, 1), -moz-transform .7s cubic-bezier(.19, 1, .22, 1), -o-transform .7s cubic-bezier(.19, 1, .22, 1);
    }

    &:focus, &:hover {
      text-decoration: none;
    }

    &:focus:after, &:hover:after {
      -webkit-transform: scaleX(0);
      -moz-transform: scaleX(0);
      -ms-transform: scaleX(0);
      -o-transform: scaleX(0);
      transform: scaleX(0);
    }

    &:disabled {
      opacity: .3;
      pointer-events: none;
    }

    @screen md {
      padding: 9px 0;
      font-size: 22px;
      line-height: 28px;
    }
  }
</style>
