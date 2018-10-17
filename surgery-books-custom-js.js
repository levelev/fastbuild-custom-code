<script type="text/javascript" src="https://clearbitjs.com/v1/x/forms.js">


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=1624223604341769&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$('.lc-landing-trustbadge').append(`<div class="d-none d-lg-block"><iframe src="//www.slideshare.net/slideshow/embed_code/key/I2jCKYHFBdjQu" width="370px" height="300px" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe></div>`);

$('#landing-benefits').before(`<div class="d-lg-none pt-5"><iframe src="//www.slideshare.net/slideshow/embed_code/key/I2jCKYHFBdjQu" width="100%" height="300px" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe></div>`);
$('.landing-content-main_cta').after(`<a class="btn btn-success btn-raised btn-lg clearbit-overlay" data-form-id="9b4b3046-3259-4fe3-810b-83318b583b3a" style="color: #fff !important;"><i class='fa fa-download' aria-hidden='true'></i> Download free sample </a>`);




$('#landing-team').after(`<div class="section text-center" id="landing-team">
	<h2 class="title mt-5">Comments</h2>
	<div class="row mb-5">
	<div class="col-md-10 ml-auto mr-auto">
	<div class="fb-comments" data-href="https://surgery.fastbuild.app/book-download" data-numposts="5"></div>
	</div>
	</div>
    </div>`);

$('#landing-team').after(`<div class="clearbit-form" data-form-id="9b4b3046-3259-4fe3-810b-83318b583b3a" data-theme="default" ></div>`);



$('.landing-content-main_cta').after(`
 </a><form style="width:120px;display:inline;" 
 action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
 <input type="hidden" name="cmd" value="_s-xclick">
 <input type="hidden" name="hosted_button_id" value="9QYL8YX9S58AQ">
 <button type="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" class="btn btn-primary btn-raised btn-lg">
 <i class='fa fa-paypal' aria-hidden='true'></i> Buy Now ($0.99)
 </button>
 <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
 </form>
 `);
