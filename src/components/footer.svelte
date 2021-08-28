<script>

</script>

<style lang='scss'>
    section {
        display: block;
    }

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
        text-decoration: underline;
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

    h2, p {
        margin: 0;
        padding: 0;
    }

    em {
        font-style: normal;
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

        h2, p {
            orphans: 3;
            widows: 3;
        }

        h2 {
            page-break-after: avoid;
        }
    }
    .rb-outro-body {
        text-align: center;
    }

    .rb-outro-container {
        padding: 0 20px;
    }

    @media (min-width: 360px) {
        .rb-outro-container {
            padding: 0 30px;
        }
    }

    @media (min-width: 768px) {
        .rb-outro-container {
            padding: 0 100px;
        }
    }

    @media (min-width: 1024px) {
        .rb-outro-container {
            padding: 0 120px;
        }
    }

    @media (min-width: 1200px) {
        .rb-outro-container {
            padding: 0 150px;
        }
    }

    @media (min-width: 1350px) {
        .rb-outro-container {
            padding: 0 180px;
        }
    }

    @media (min-width: 1600px) {
        .rb-outro-container {
            padding: 0 220px;
        }
    }

    @media (min-width: 1900px) {
        .rb-outro-container {
            padding: 0 270px;
        }
    }

    .rb-svgsprite {
        display: inline-block;
        width: 1em;
        height: 1em;
        fill: currentColor;
        vertical-align: middle;
    }

    .rb-outro {
        position: relative;
        overflow: hidden;
        color: #fff;
        background: #000;
    }

    @media (min-width: 1024px) {
        .rb-outro {
            height: 100%;
            min-height: 500px;
            max-height: 700px;
        }
    }

    .rb-outro-content {
        position: relative;
        z-index: 1;
        padding: 95px 0 55px 0;
    }

    @media (min-width: 1024px) {
        .rb-outro-content {
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -moz-box-orient: vertical;
            -moz-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -moz-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            height: 100%;
            padding: 60px 0;
        }
    }

    .rb-outro-footer {
        text-align: center;
    }

    @media (min-width: 1024px) {
        .rb-outro-footer {
            text-align: left;
        }
    }

    @media (min-width: 1024px) {
        .rb-outro-grid {
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
        }
    }

    @media (min-width: 1024px) {
        .rb-outro-grid-col {
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -moz-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
        }
    }

    @media (min-width: 1024px) {
        .rb-outro-grid-col.-right {
            padding: 0 0 0 40px;
            text-align: right;
        }
    }

    .rb-outro-header {
        font-size: 38px;
        font-weight: 400;
        line-height: 110%;
        letter-spacing: -.03em;
    }

    @media (min-width: 360px) {
        .rb-outro-header {
            font-size: 42px;
        }
    }

    @media (min-width: 768px) {
        .rb-outro-header {
            font-size: 60px;
        }
    }

    @media (min-width: 1200px) {
        .rb-outro-header {
            font-size: 5.41667vw;
        }
    }

    .rb-outro-header h2 {
        font-size: inherit;
        font-weight: 700;
        letter-spacing: inherit;
        line-height: 3em;
    }

    .rb-outro-header a {
        position: relative;
        display: inline-block;
        padding: 0 0 8px 0;
        font-weight: 300;
        text-decoration: none;
    }

    @media (min-width: 1024px) {
        .rb-outro-header a {
            padding: 0 0 15px 0;
        }
    }

    .rb-outro-header a:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background: currentColor;
        -webkit-transition: -webkit-transform .45s cubic-bezier(.4, .22, .21, 1.04);
        transition: -webkit-transform .45s cubic-bezier(.4, .22, .21, 1.04);
        -o-transition: -o-transform .45s cubic-bezier(.4, .22, .21, 1.04);
        -moz-transition: transform .45s cubic-bezier(.4, .22, .21, 1.04), -moz-transform .45s cubic-bezier(.4, .22, .21, 1.04);
        transition: transform .45s cubic-bezier(.4, .22, .21, 1.04);
        transition: transform .45s cubic-bezier(.4, .22, .21, 1.04), -webkit-transform .45s cubic-bezier(.4, .22, .21, 1.04), -moz-transform .45s cubic-bezier(.4, .22, .21, 1.04), -o-transform .45s cubic-bezier(.4, .22, .21, 1.04);
    }

    .rb-outro-header a:focus:before, .rb-outro-header a:hover:before {
        -webkit-transform: scaleX(0);
        -moz-transform: scaleX(0);
        -ms-transform: scaleX(0);
        -o-transform: scaleX(0);
        transform: scaleX(0);
    }

    .rb-outro-mail {
        margin: 80px 0 0 0;
    }

    @media (min-width: 1024px) {
        .rb-outro-mail {
            margin: 0;
        }
    }

    .rb-outro-mail a {
        position: relative;
        display: inline-block;
        padding: 0 0 5px 0;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: .00464286em;
        text-decoration: none;
				&:hover {
				text-decoration: none!important;
				 }
    }

    .rb-outro-mail a:after, .rb-outro-mail a:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background: rgba(255, 255, 255, .3);
    }

    .rb-outro-mail a:after {
        background: rgba(255, 255, 255, .7);
        -webkit-transform: scaleX(0);
        -moz-transform: scaleX(0);
        -ms-transform: scaleX(0);
        -o-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: -webkit-transform .8s cubic-bezier(.19, 1, .22, 1);
        transition: -webkit-transform .8s cubic-bezier(.19, 1, .22, 1);
        -o-transition: -o-transform .8s cubic-bezier(.19, 1, .22, 1);
        -moz-transition: transform .8s cubic-bezier(.19, 1, .22, 1), -moz-transform .8s cubic-bezier(.19, 1, .22, 1);
        transition: transform .8s cubic-bezier(.19, 1, .22, 1);
        transition: transform .8s cubic-bezier(.19, 1, .22, 1), -webkit-transform .8s cubic-bezier(.19, 1, .22, 1), -moz-transform .8s cubic-bezier(.19, 1, .22, 1), -o-transform .8s cubic-bezier(.19, 1, .22, 1);
    }

    .rb-outro-mail a:focus:after, .rb-outro-mail a:hover:after {
        -webkit-transform: scaleX(1);
        -moz-transform: scaleX(1);
        -ms-transform: scaleX(1);
        -o-transform: scaleX(1);
        transform: scaleX(1);
    }

    .rb-outro-address {
        margin: 28px auto 0 auto;
        color: rgba(255, 255, 255, .6);
        font-size: 14px;
        font-weight: 400;
        line-height: 157%;
    }

    @media (min-width: 1024px) {
        .rb-outro-address {
            margin: 28px -30px 0 -30px;
        }
    }

    @media (min-width: 1200px) {
        .rb-outro-address {
            margin: 28px -35px 0 -35px;
        }
    }

    .rb-outro-address address {
        display: block;
        font-style: normal;
        margin: 15px 0;
    }

    @media (min-width: 1024px) {
        .rb-outro-address address {
            display: inline-block;
            margin: 0 30px;
        }
    }

    @media (min-width: 1200px) {
        .rb-outro-address address {
            margin: 0 35px;
        }
    }

    .rb-outro-link {
        margin: 30px 0 0 0;
    }

    @media (min-width: 1024px) {
        .rb-outro-link {
            margin: 18px 0 0 0;
        }
    }

    .rb-outro-link-item {
        position: relative;
        font-size: 14px;
        line-height: 22px;
        text-decoration: none;
    }

    .rb-outro-link-item:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -3px;
        height: 1px;
        -webkit-transform: scaleX(0);
        -moz-transform: scaleX(0);
        -ms-transform: scaleX(0);
        -o-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: right center;
        -moz-transform-origin: right center;
        -ms-transform-origin: right center;
        -o-transform-origin: right center;
        transform-origin: right center;
        background: currentColor;
        -webkit-transition: -webkit-transform .4s, -webkit-transform-origin 0s;
        transition: -webkit-transform .4s, -webkit-transform-origin 0s;
        -o-transition: -o-transform .4s, -o-transform-origin 0s;
        -moz-transition: transform .4s, transform-origin 0s, -moz-transform .4s, -moz-transform-origin 0s;
        transition: transform .4s, transform-origin 0s;
        transition: transform .4s, transform-origin 0s, -webkit-transform .4s, -moz-transform .4s, -o-transform .4s, -webkit-transform-origin 0s, -moz-transform-origin 0s, -ms-transform-origin 0s, -o-transform-origin 0s;
    }

    .rb-outro-link-item:hover:before {
        -webkit-transform: scaleX(1);
        -moz-transform: scaleX(1);
        -ms-transform: scaleX(1);
        -o-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -ms-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    .rb-outro-social {
        position: relative;
        padding: 40px 0 0 0;
    }

    @media (min-width: 1024px) {
        .rb-outro-social {
            padding: 33px 0 0 0;
        }
    }

    @media (min-width: 1200px) {
        .rb-outro-social {
            margin: -15px;
        }
    }

    @media (min-width: 1600px) {
        .rb-outro-social {
            padding: 33px 0 0 0;
        }
    }

    .rb-outro-social-item {
        position: relative;
        display: inline-block;
        width: 76px;
        height: 63px;
        overflow: hidden;
        opacity: .3;
        cursor: pointer;
        font-size: 20px;
        font-weight: 300;
        line-height: 64px;
        letter-spacing: .00464286em;
        text-align: center;
        text-decoration: none;
        -webkit-transition: opacity .2s;
        -o-transition: opacity .2s;
        -moz-transition: opacity .2s;
        transition: opacity .2s;
    }

    @media (min-width: 768px) {
        .rb-outro-social-item {
            width: 98px;
            height: 68px;
            line-height: 67px;
        }
    }

    @media (min-width: 1200px) {
        .rb-outro-social-item {
            width: -webkit-calc(33.33% - 30px);
            width: -moz-calc(33.33% - 30px);
            width: calc(33.33% - 30px);
            height: auto;
            padding: 18px 0;
            line-height: normal;
            margin: 15px;
            opacity: 1;
            text-align: left;
        }
    }

    .rb-outro-social-item-title {
        position: relative;
        display: inline-block;
        overflow: hidden;
    }

    .rb-outro-social-item-title span {
        display: none;
    }

    @media (min-width: 1200px) {
        .rb-outro-social-item-title span {
            display: inline-block;
            position: relative;
            z-index: 1;
            color: transparent;
            -webkit-transition: -webkit-transform 1.2s cubic-bezier(.19, 1, .22, 1);
            transition: -webkit-transform 1.2s cubic-bezier(.19, 1, .22, 1);
            -o-transition: -o-transform 1.2s cubic-bezier(.19, 1, .22, 1);
            -moz-transition: transform 1.2s cubic-bezier(.19, 1, .22, 1), -moz-transform 1.2s cubic-bezier(.19, 1, .22, 1);
            transition: transform 1.2s cubic-bezier(.19, 1, .22, 1);
            transition: transform 1.2s cubic-bezier(.19, 1, .22, 1), -webkit-transform 1.2s cubic-bezier(.19, 1, .22, 1), -moz-transform 1.2s cubic-bezier(.19, 1, .22, 1), -o-transform 1.2s cubic-bezier(.19, 1, .22, 1);
        }

        .rb-outro-social-item-title span:after, .rb-outro-social-item-title span:before {
            content: attr(data-text);
            display: block;
            position: absolute;
            color: #fff;
        }

        .rb-outro-social-item-title span:before {
            top: 0;
            -webkit-transform: skewY(0);
            -moz-transform: skewY(0);
            -ms-transform: skewY(0);
            -o-transform: skewY(0);
            transform: skewY(0);
            -webkit-transform-origin: right bottom;
            -moz-transform-origin: right bottom;
            -ms-transform-origin: right bottom;
            -o-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transition: -webkit-transform 2s cubic-bezier(.19, 1, .22, 1);
            transition: -webkit-transform 2s cubic-bezier(.19, 1, .22, 1);
            -o-transition: -o-transform 2s cubic-bezier(.19, 1, .22, 1);
            -moz-transition: transform 2s cubic-bezier(.19, 1, .22, 1), -moz-transform 2s cubic-bezier(.19, 1, .22, 1);
            transition: transform 2s cubic-bezier(.19, 1, .22, 1);
            transition: transform 2s cubic-bezier(.19, 1, .22, 1), -webkit-transform 2s cubic-bezier(.19, 1, .22, 1), -moz-transform 2s cubic-bezier(.19, 1, .22, 1), -o-transform 2s cubic-bezier(.19, 1, .22, 1);
        }

        .rb-outro-social-item-title span:after {
            top: 105%;
            -webkit-transform: skewY(7deg);
            -moz-transform: skewY(7deg);
            -ms-transform: skewY(7deg);
            -o-transform: skewY(7deg);
            transform: skewY(7deg);
            -webkit-transform-origin: left top;
            -moz-transform-origin: left top;
            -ms-transform-origin: left top;
            -o-transform-origin: left top;
            transform-origin: left top;
            -webkit-transition: -webkit-transform 2s cubic-bezier(.19, 1, .22, 1);
            transition: -webkit-transform 2s cubic-bezier(.19, 1, .22, 1);
            -o-transition: -o-transform 2s cubic-bezier(.19, 1, .22, 1);
            -moz-transition: transform 2s cubic-bezier(.19, 1, .22, 1), -moz-transform 2s cubic-bezier(.19, 1, .22, 1);
            transition: transform 2s cubic-bezier(.19, 1, .22, 1);
            transition: transform 2s cubic-bezier(.19, 1, .22, 1), -webkit-transform 2s cubic-bezier(.19, 1, .22, 1), -moz-transform 2s cubic-bezier(.19, 1, .22, 1), -o-transform 2s cubic-bezier(.19, 1, .22, 1);
        }
    }

    @media (min-width: 1200px) {
        .rb-outro-social-item svg {
            display: none;
        }
    }

    .rb-outro-social-item:hover {
        opacity: 1;
    }

    .rb-outro-social-item:hover .rb-outro-social-item-title span {
        -webkit-transform: translateY(-105%);
        -moz-transform: translateY(-105%);
        -ms-transform: translateY(-105%);
        -o-transform: translateY(-105%);
        transform: translateY(-105%);
    }

    @media (pointer: coarse) {
        .rb-outro-social-item:hover .rb-outro-social-item-title span {
            -webkit-transform: none;
            -moz-transform: none;
            -ms-transform: none;
            -o-transform: none;
            transform: none;
        }
    }

    .rb-outro-social-item:hover .rb-outro-social-item-title span:before {
        -webkit-transform: skewY(7deg);
        -moz-transform: skewY(7deg);
        -ms-transform: skewY(7deg);
        -o-transform: skewY(7deg);
        transform: skewY(7deg);
    }

    @media (pointer: coarse) {
        .rb-outro-social-item:hover .rb-outro-social-item-title span:before {
            -webkit-transform: none;
            -moz-transform: none;
            -ms-transform: none;
            -o-transform: none;
            transform: none;
        }
    }

    .rb-outro-social-item:hover .rb-outro-social-item-title span:after {
        -webkit-transform: skewY(0);
        -moz-transform: skewY(0);
        -ms-transform: skewY(0);
        -o-transform: skewY(0);
        transform: skewY(0);
    }

    @media (pointer: coarse) {
        .rb-outro-social-item:hover .rb-outro-social-item-title span:after {
            -webkit-transform: none;
            -moz-transform: none;
            -ms-transform: none;
            -o-transform: none;
            transform: none;
        }
    }
</style>

<section class='rb-outro'>
	<div class='rb-outro-content' data-cursor='-inverse'
			 style='transform: translate3d(0px, -11.3866%, 0px); will-change: transform;'>
		<div class='rb-outro-body'>
			<div class='rb-outro-container'>
				<div class='rb-outro-header'>
					<h2>Thỏ Bảy Màu</h2>
				</div>
			</div>
		</div>
		<div class='rb-outro-footer'>
			<div class='rb-outro-container'>
				<div class='rb-outro-grid'>
					<div class='rb-outro-grid-col -left'>
						<div class='rb-outro-mail'><a
							href='mailto:quangcao@thobaymau.vn'><em><span>quangcao@thobaymau.vn</span></em></a>
						</div>
						<div class='rb-outro-address'>
							<address><p>Tầng 1, Tòa nhà Packsimex</p>
								<p>52 Đông Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh</p></address>
						</div>
					</div>
					<div class='rb-outro-grid-col -right'>
						<div class='rb-outro-social'>
							<div class='rb-outro-social-row'><a class='rb-outro-social-item' href='https://www.facebook.com/ThoBayMau'
																									target='_blank' rel='noopener' aria-label='Facebook'>
								<span
								class='rb-outro-social-item-title'>
								<span data-text='Facebook'>Facebook</span>
							</span>
									<svg class="rb-svgsprite -facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.76 32" id="facebook"><path d="M13.71 5.33h3.05V.15C16.3.15 14.48 0 12.34 0 7.92 0 5 2.59 5 7.47v4.26H0v5.64h5V32h6V17.37h4.88l.76-5.64h-5.82V8.08c0-1.68.46-2.75 2.89-2.75z"></path></svg>
							</a>
								<a class='rb-outro-social-item' href='https://www.youtube.com/channel/UCqb-IU-JKgCg2aqZw3gJafQ'
									 target='_blank' rel='noopener' aria-label='YouTube'><span class='rb-outro-social-item-title'><span
									data-text='YouTube'>YouTube</span></span>
									<svg class="rb-svgsprite -facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" id="youtube">
										<path d="M19.22 1.29C18.5.37 17.17 0 14.62 0H5.38C2.78 0 1.42.4.7 1.37S0 3.72 0 5.66v3.69C0 13.1.83 15 5.38 15h9.24c2.21 0 3.43-.33 4.22-1.14S20 11.68 20 9.35V5.66c0-2.05 0-3.45-.78-4.37zM12.84 8l-4.2 2.34a.59.59 0 01-.29.07.67.67 0 01-.35-.08.72.72 0 01-.31-.59V5.08A.72.72 0 018 4.49a.62.62 0 01.63 0l4.2 2.32a.71.71 0 010 1.22z"></path>
									</svg>
								</a>
							</div>
							<div class='rb-outro-social-row'>
								<a class='rb-outro-social-item' href='https://www.instagram.com/_thobaymau_/' target='_blank'
									 rel='noopener' aria-label='Instagram'><span class='rb-outro-social-item-title'><span
									data-text='Instagram'>Instagram</span></span>
									<svg class="rb-svgsprite -instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="instagram">
										<path xmlns="http://www.w3.org/2000/svg" d="M3 10v12a7.07 7.07 0 007 7h12a7.07 7.07 0 007-7V10a7.07 7.07 0 00-7-7H10a7.07 7.07 0 00-7 7zm-3 0A9.81 9.81 0 0110 0h12a9.81 9.81 0 0110 10v12a9.81 9.81 0 01-10 10H10A9.81 9.81 0 010 22zm16 10.71A4.71 4.71 0 1011.29 16 4.66 4.66 0 0016 20.71zm0 2.82A7.53 7.53 0 1123.53 16 7.55 7.55 0 0116 23.53zm9.41-15.06a1.88 1.88 0 01-3.76 0 1.88 1.88 0 113.76 0z"/>
									</svg>
								</a><a class='rb-outro-social-item' href='https://www.tiktok.com/@thobaymau.vn' target='_blank'
											 rel='noopener' aria-label='Tiktok'><span class='rb-outro-social-item-title'><span
								data-text='Tiktok'>Tiktok</span></span>
							</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
