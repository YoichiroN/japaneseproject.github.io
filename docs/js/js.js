main();

function main() {
	loadStuff();
	setUpStuff();
}

function setUpStuff() {
		setBackgroundImg();
		checkNavIcon();
}

function loadStuff() {
	$("#top-nav").load("/docs/pages/top-nav.html");
}

function setBackgroundImg() {
	imgWidth = $("meta[name='bg-img-width']").attr("content");
	$("#background").css({
		"min-height" : "100%",
		"min-width" : imgWidth,
		"width" : "100%",
		"height" : "auto",
		"position" : "fixed",
		"top" : "0"
	});
	$("style").append("@media screen and (max-width: " + imgWidth +") {#background{left: 50%; margin-left: " +String(parseInt(imgWidth, 10) / 2 * -1) + "px}}");
}

function setNavIcon() {
	//Center Icons
	$navIcons = $("#top-nav i");
	for (var i = 0; i < $navIcons.length; i++) {
		$($navIcons[i]).css("left", "calc(50% - " + String($($navIcons[i]).width() / 2) + "px)");
	}
	//Give Animation Delay
	$links = $("#top-nav a");
		for (var i = 0; i < $navIcons.length; i++) {
			$($links[i]).css("animation-delay", String(i * 0.1) + "s");
		}
}

function checkNavIcon() {
	if ($("#top-nav i").length > 0) {
		setTimeout(setNavIcon, 100);
	}
	else setTimeout(checkNavIcon, 50);
}

function switchTopNav() {
	if ($("#top-nav #links").hasClass("open")) {
		$("#top-nav #links").addClass("close").removeClass("open");
	} else {
		$("#top-nav #links").addClass("open").removeClass("close");
	}
}
