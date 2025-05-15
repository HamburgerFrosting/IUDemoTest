function setTopNav(context){
    IU = IU || {};
    IU.INIT_DATA = IU.INIT_DATA || {};
    
    /*
     Initialize to cookies, in case the user is logged out, or topnav.json is
     cached.  The cookie values in turn fall back to the defaults on 
     IU.INIT_DATA.TEMPLATE_CUES. If TEMPLATE_CUES exists in topnav.json, then
     these values will be overwritten later.
    */
    for (var cue_name in IU.INIT_DATA.TEMPLATE_CUES) {
        try {
            var cue_value = ("; " + document.cookie).split('; cue_' + cue_name + '=')[1].split(';')[0];
            if (cue_value == 'true') {
                IU.INIT_DATA.TEMPLATE_CUES[cue_name] = true;
            } else if (cue_value == 'false') {
                IU.INIT_DATA.TEMPLATE_CUES[cue_name] = false;
            }
        } 
    }

    for (var key in context) {
        if (IU.INIT_DATA.hasOwnProperty(key)) {
            IU.INIT_DATA[key] = context[key];
        }
    }

    var template = _.template($('#template-topnav-logged-out').html());
    if(context['LOGGED_IN_USER']){
        // User is logged in
        template = _.template($('#template-topnav-logged-in').html());
        $(function(){
            var add = $('#content-add');
            create.attr('href', create.attr('href').split('?')[0]);
        });


        if (context['LOGGED_IN_USER']['model']['has_outstanding_email_confirmation'] === true && 
            'confirmed_email' in IU.INIT_DATA.TEMPLATE_CUES && 
            IU.INIT_DATA.TEMPLATE_CUES.confirmed_email) {
            $('.confirm-email').show();
            $('#confirm-email-popup').click(function(){
                openResendDialogue();
            });
        }
    } else if (IU.INIT_DATA.LOGGED_IN_USER.model) {
        // THIS IS HERE FOR BACKWARDS COMPATIBILITY PERTAINING TO RELEASE
        // 2.0.107, AND CACHING OF TOPNAV.JSON.
        template = _.template($('#template-topnav-logged-in').html());
        $(function(){
            var create = $('#project-create');
            create.attr('href', create.attr('href').split('?')[0]);
        });
        context['LOGGED_IN_USER'] = IU.INIT_DATA.LOGGED_IN_USER;
    }

    $('.topnav').replaceWith(template(context));

    $(dispatchTopNavReady);
}

function setTopNavFromJson() {
    $.ajax({
        url: '/fragment/topnav.json',
    }).done(function (data_json) {
        topNavContext = JSON.parse(data_json);
        setTopNav(topNavContext);
    });
}

var topNavReady;
var dispatchTopNavReady;

if(document.createEvent) { // non-IE
    topNavReady = document.createEvent('Event');
    topNavReady.initEvent('topnavready', true, true);
    dispatchTopNavReady = function () {
        document.dispatchEvent(topNavReady);
    }
} else if (document.createEventObject) { // IE
    dispatchTopNavReady = function () {
        document.documentElement.topnavready++;
    }
}
setTopNavFromJson();
