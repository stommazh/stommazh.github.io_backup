<script context='module' lang='ts'>
	export const prerender = true;
</script>

<script lang='ts'>
</script>

<div class='w-full' id='project'>
	<h2 class='text-6xl font-black py-30 text-transparent '>
		Dự án
	</h2>
	<section class='rb-splitshow'>
		<div class='rb-splitshow-content -ct'>
			<div class='rb-splitshow-container'>
				<div class='rb-splitshow-items'>
					<div class='rb-splitshow-col -left'>
						<div class='rb-splitshow-item' data-cat='web,app'><a class='rb-splitshow-preview -asm'
																																 href='#' data-cursor='-color-ulesson'
																																 data-cursor-text='view case' aria-label='uLesson'>
							<picture style='opacity: 1; transform: translate(0px, 0px); will-change: auto;'>
								<source
									srcset='/sach-t7m-timeline.jpg'
									media='(min-width:768px)'>
								<img src='/sach-t7m-timeline.jpg'
										 srcset='/sach-t7m-timeline.jpg' alt=''
										 style='transform: translate3d(0px, -9%, 0px); will-change: transform;'></picture>
						</a>
							<div class='rb-splitshow-caption'><b>TIMELINE CỦA TUI CÓ GÌ?</b>- Sách</div>
						</div>
						<div class='rb-splitshow-item' data-cat='app'><a class='rb-splitshow-preview -asm' href='#'
																														 data-cursor='-color-sleepiest' data-cursor-text='view case'
																														 aria-label='Sleepiest'>
							<picture style='opacity: 1; transform: translate(0px, 0px); will-change: auto;'>
								<source
									srcset='/thong-tho.jpeg'
									media='(min-width:768px)'>
								<img src='/thong-tho.jpeg'
										 srcset='/thong-tho.jpeg' loading='eager' alt=''
										 style='transform: translate(0px, -10%); will-change: transform;'></picture>
						</a>
							<div class='rb-splitshow-caption'><b>THÔNG THỎ</b> – Đồ chơi</div>
						</div>
					</div>
					<div class='rb-splitshow-col -right'>

						<div class='rb-splitshow-item' data-cat='web'><a class='rb-splitshow-preview -asm'
																														 href='#' data-cursor='-color-ferrumpipe'
																														 data-cursor-text='view case' aria-label='Ferrumpipe'>
							<picture style='opacity: 1; transform: translate(0px, 0px); will-change: auto;'>
								<source
									srcset='/sach-t7m-cover.jpeg'
									media='(min-width:768px)'>
								<img src='//sach-t7m-cover.jpeg'
										 srcset='/sach-t7m-cover.jpeg' loading='eager' alt=''
										 style='transform: translate(0px, -15%); will-change: transform;'></picture>
						</a>
							<div class='rb-splitshow-caption'><b>THỎ BẢY MÀU VÀ NHỮNG NGƯỜI NGHĨ NÓ LÀ BẠN</b> – Sách</div>
						</div>
						<div class='rb-splitshow-item' data-cat='app'><a class='rb-splitshow-preview -asm' href='#'
																														 data-cursor='-color-euroauto' data-cursor-text='view case'
																														 aria-label='EuroAuto'>
							<picture style='opacity: 1; transform: translate(0px, 0px); will-change: auto;'>
								<source
									srcset='/x-talk.jpeg'
									media='(min-width:768px)'>
								<img src='/x-talk.jpeg'
										 srcset='/x-talk.jpeg' loading='eager' alt=''
										 style='transform: translate(0px, -10%); will-change: transform;'></picture>
						</a>
							<div class='rb-splitshow-caption'><b>Thỏ bảy màu X TALK!</b> – Bộ sưu tập crush collection</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang='scss'>
  /*! CSS Used from: https://cuberto.com/assets/css/main.css?v=4.5.15 */
  section {
    display: block;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  b {
    font-weight: inherit;
  }

  b {
    font-weight: bolder;
  }

  img {
    border-style: none;
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

  img {
    vertical-align: middle;
  }

  @media print {
    *, ::after, ::before {
      text-shadow: none !important;
      -webkit-box-shadow: none !important;
      -moz-box-shadow: none !important;
      box-shadow: none !important;
    }
    img {
      page-break-inside: avoid;
    }
  }

  .rb-splitshow-items {
    margin: -12px -6px;
  }

  @media (min-width: 360px) {
    .rb-splitshow-items {
      margin: -14px -7px;
    }
  }

  @media (min-width: 768px) {
    .rb-splitshow-items {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -moz-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin: -24px -12px;
    }
  }

  @media (min-width: 1024px) {
    .rb-splitshow-items {
      margin: -34px -17px;
    }
  }

  @media (min-width: 1200px) {
    .rb-splitshow-items {
      margin: -40px -20px;
    }
  }

  @media (min-width: 1600px) {
    .rb-splitshow-items {
      margin: -32px -16px;
    }
  }

  .rb-splitshow-col {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  @media (min-width: 768px) {
    .rb-splitshow-col.-right {
      margin: 122px 0 0 0;
    }
  }

  @media (min-width: 1024px) {
    .rb-splitshow-col.-right {
      margin: 170px 0 0 0;
    }
  }

  @media (min-width: 1200px) {
    .rb-splitshow-col.-right {
      margin: 193px 0 0 0;
    }
  }

  @media (min-width: 1900px) {
    .rb-splitshow-col.-right {
      margin: 250px 0 0 0;
    }
  }

  .rb-splitshow-item {
    display: block;
    margin: 12px -14px;
  }

  @media (min-width: 360px) {
    .rb-splitshow-item {
      margin: 14px -23px;
    }
  }

  @media (min-width: 768px) {
    .rb-splitshow-item {
      margin: 24px 12px;
    }
  }

  @media (min-width: 1024px) {
    .rb-splitshow-item {
      margin: 34px 17px;
    }
  }

  @media (min-width: 1200px) {
    .rb-splitshow-item {
      margin: 40px 20px;
    }
  }

  @media (min-width: 1600px) {
    .rb-splitshow-item {
      margin: 32px 16px;
    }
  }

  .rb-splitshow-preview {
    position: relative;
    display: block;
    overflow: hidden;
    padding-bottom: 130.593%;
    -webkit-transition: -webkit-transform .4s;
    transition: -webkit-transform .4s;
    -o-transition: -o-transform .4s;
    -moz-transition: transform .4s, -moz-transform .4s;
    transition: transform .4s;
    transition: transform .4s, -webkit-transform .4s, -moz-transform .4s, -o-transform .4s;
  }

  @media (max-width: 767px) {
    .rb-splitshow-preview.-asm {
      padding-bottom: 100%;
    }
  }

  @media (max-width: 767px) {
    .rb-splitshow-preview.-asm img {
      -webkit-border-radius: 40px;
      -moz-border-radius: 40px;
      border-radius: 40px;
      -webkit-transform: none !important;
      -moz-transform: none !important;
      -ms-transform: none !important;
      -o-transform: none !important;
      transform: none !important;
    }
  }

  .rb-splitshow-preview img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }

  .rb-splitshow-preview picture {
    display: block;
    -webkit-transition: -webkit-transform .4s;
    transition: -webkit-transform .4s;
    -o-transition: -o-transform .4s;
    -moz-transition: transform .4s, -moz-transform .4s;
    transition: transform .4s;
    transition: transform .4s, -webkit-transform .4s, -moz-transform .4s, -o-transform .4s;
  }

  a.rb-splitshow-preview {
    text-decoration: none;
  }

  @media (min-width: 1200px) {
    a.rb-splitshow-preview:hover {
      -webkit-transform: scale(.97);
      -moz-transform: scale(.97);
      -ms-transform: scale(.97);
      -o-transform: scale(.97);
      transform: scale(.97);
    }
    a.rb-splitshow-preview:hover picture {
      -webkit-transform: scale(1.02);
      -moz-transform: scale(1.02);
      -ms-transform: scale(1.02);
      -o-transform: scale(1.02);
      transform: scale(1.02);
    }
  }

  .rb-splitshow-caption {
    display: block;
    margin: 0 auto;
    padding: 19px 0;
    max-width: 270px;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
  }

  @media (min-width: 360px) {
    .rb-splitshow-caption {
      padding: 23px 0 36px 0;
    }
  }

  @media (min-width: 768px) {
    .rb-splitshow-caption {
      padding: 25px 0 44px 0;
      max-width: 220px;
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    .rb-splitshow-caption {
      padding: 34px 0 53px 0;
      max-width: 284px;
      font-size: 18px;
    }
  }

  @media (min-width: 1200px) {
    .rb-splitshow-caption {
      padding: 40px 0 60px 0;
      max-width: 318px;
      font-size: 22px;
    }
  }

  .rb-splitshow-caption b {
    font-weight: 600;
  }
</style>
