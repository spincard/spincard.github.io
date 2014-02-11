// Form Config
Simplr.Form.mAddLabelAssociation({
	rfield : "Required Field 1"
});
Simplr.Form.mAddValidationAssociation({
	ofield : function(rules) { rules.splice(0,1); }
});

/*
//Form Custom Validations
Simplr.Validation.mAddValidators({
	IsValidExcerpt : function(value) {
		var results = $.extend(true, {}, Simplr.Validation.mGetRuleResultsTemplate(), { valid : true });
		if((value.length < App.Data.ExcerptCharacterLimits.Min) || (value.length > App.Data.ExcerptCharacterLimits.Max)) {
			results.valid = false;
			results.errorCodes.push("eIsNotValidExcerpt");
		}
		return results;
	}
});
*/

/*
//Form Custom Codes
Simplr.Validation.mAddCodes({
	eIsNotValidExcerpt : "$[label] must be between " + App.Data.ExcerptCharacterLimits.Min + " and " + App.Data.ExcerptCharacterLimits.Max + " characters."
});
*/

//Form Functionality
App.Form = {
	Data : {
		InactiveClass : "inactive"
	},
	GetFormValues : function(form) {
		$(form).find(".form-defaults").each(function() {
			if($(this).val() == $(this).data("default")) {
				if($(this).is("select")) {  // if this is a select, our default is set as the value, ( fix ie issue )
					$(this).val($(this).data("default"));
				} else { // otherwise we clear the field.
					$(this).val("");
				}
			}
		});
		return Simplr.Form.mGetValues(form);
	},
	AddDefaultText : function(input) {
		$(input).addClass("form-defaults").on("focusin", {}, function(evt) {
			var defaultText = $(this).data("default");
			$(this).removeClass(App.Form.Data.InactiveClass);
			if($(this).val() == defaultText) {
				$(this).val("");
			}
		}).on("focusout", {}, function(evt) {
			var defaultText = $(this).data("default");
			if(Simplr.Util.mEmpty($(this).val()) || ($(this).val() == defaultText)) {
				$(this).addClass(App.Form.Data.InactiveClass).val(defaultText);
			} else {
				$(this).removeClass(App.Form.Data.InactiveClass);
			}
		}).trigger("focusout");
	}
};