(function($) {
	// jQuery functions
	$.extend({
		
	});

	$.fn.extend({
		commentFormSwitch: function (backHomeLinkText) {
			$(this).each(function () {
				var $container = $(this),
					$normalPageContent = $container.find("#pageContent"),
					$commentFormContainer = $container.find("#writeComment"),
					$writeCommentButton = $normalPageContent.find("#writeCommentButton"),
					$homeButton;

				if (backHomeLinkText === undefined || backHomeLinkText == "") {
					backHomeLinkText = "Home";
				}
					
				
				$commentFormContainer.prepend('<a href="#" id="backHomeLink"><span>' + backHomeLinkText + '</span></a>').fadeOut(0);
				$homeButton = $commentFormContainer.find('#backHomeLink');
				
				$writeCommentButton.click(function (e) {
					e.preventDefault();
					
					$normalPageContent.fadeOut(200, function () {
						$commentFormContainer.fadeIn(200);
					});
				});
				
				$homeButton.click(function (e) {
					e.preventDefault();
					
					$commentFormContainer.fadeOut(200, function () {
						$normalPageContent.fadeIn(200);
					});
				});
			});
		}
	});
})(jQuery);

jQuery(function($) {
	
});