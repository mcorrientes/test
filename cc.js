	function check_x(){
		if (document.readyState === 'complete') {
			jQuery('.row .vcenter .grey2').html('Actor <small>from</small> Vancouver, BC');
			jQuery('.col-md-9.paddingbottom20.font-raleway').append('<iframe src="https://youtube.com/embed/2aDijlfBabY?color=white&controls=1&autohide=1&showinfo=0&rel=0" width="356" height="200" frameborder="0" />');
		}
		else
			setTimeout(function(){ check_x();}, 100);
	}
	check_x();