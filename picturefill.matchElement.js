(function (w) {

	var rules = {
		"min-width": function ($element, value) {
			return $element.width() > value;
		},
		"max-width": function ($element, value) {
			return $element.width() < value;
		},
		"min-height": function ($element, value) {
			return $element.height() > value;
		},
		"max-height": function ($element, value) {
			return $element.height() < value;
		}
	};

	w.picturefill.plugins.element = function (params) {
		var picture = params.picture;
		var source = params.source;
		/**
		 * The "data-picture-resize" attribute on the "data-picture" element
		 * enables watching on element resize via the "jquery.ba-resize" plugin.
		 */
		window.p = picture;
		if (picture.getAttribute('data-picture-resize') !== null 
			&& picture.getAttribute('data-picture-element-listening') == null // only add it once
		) {
			$(picture).on('resize.picturefillelement', function (e) { // namespace it for later removal
				w.picturefill(e, source); // pass the source for better performance
			});
			picture.setAttribute('data-picture-element-listening', 'true'); // prevent re-binding
		}
		var specified;
		var matches;
		var rulesAttr = source.getAttribute( "data-rules" );
		if (rulesAttr) {
			specified = true;
			var sourceRules = JSON.parse(rulesAttr);
			for(var selector in sourceRules) {
				var $element = $(selector);
				var selectorRules = sourceRules[selector];
				for(var rule in selectorRules) {
					var value = selectorRules[rule];
					if (rules.hasOwnProperty(rule)) {
						var ruleMatches = rules[rule]($element, value);
						matches = (matches == null) ? ruleMatches : matches && ruleMatches;
					}
				}
			}
		}
		return {
			specified: specified,
			matches: matches
		};
	};
})(this);
