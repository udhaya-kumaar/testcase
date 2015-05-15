/**install phantomjs version 1.9.0
* install casperjs version 1.1.0-beta3
* save the file at any location and get into the file through command prompt 
* to run >> casperjs dashtest.js
*/

var casper = require("casper").create();
var Url = "http://staging548.curationcorp.com"
var viewport = {width: 1280, height: 1024};
var roles = [
{"email":"jon.a@adappt.co.uk","password":"Polka123Polka","role":"admin"},
{"email":"level1@example.com","password":"password","role":"level1"},
{"email":"sha-testing@gmail.com","password":"Sharmila223","role":"level2"}];

casper.start(Url, function() {
	console.log("Website found. Testing User Roles...");
});

/**
* Iteration for users roles
*/

roles.forEach(function(role){
	casper.thenOpen(Url,function(){
		console.log("loging into CurationCorp - ",role.role)
		this.fill(".signin",{
			email:role.email,
			password:role.password		
		},true);
		this.wait(2000,function(){
			if(this.getCurrentUrl() != Url + "/signin") {
				console.log("login success, Current Url is ",this.getCurrentUrl());
				if (this.exists('a[tooltip="Dashboards"]')) console.log("Dashboard exists");
				else console.log("login Unsuccessful");
				var _sUrl = 'screens/' + role.role + " new.png";
				this.viewport(viewport.width,viewport.height);
				if (this.click('a[tooltip="Dashboards"]')){
					console.log("click over DASHBOARDS exists");
					this.capture(_sUrl,{
						top:0,
						left:0,
						width:viewport.width,
						height:viewport.height
					})
					console.log("screenshot captured",_sUrl);
				}
				else console.log("cant't be clicked");

				if (this.exists('a[tooltip="Settings"]')) console.log("Settings exists");
				var _sUrl = 'screens/' + role.role + " new2.png";
				this.viewport(viewport.width,viewport.height);
				if (this.click('a[tooltip="Settings"]')){
					console.log("click over SETTINGS exists");
					this.capture(_sUrl,{
						top:0,
						left:0,
						width:viewport.width,
						height:viewport.height
					})
					console.log("screenshot captured",_sUrl);
				}
				else console.log("cant't be clicked");

				if (this.exists('a[tooltip="Market Place"]')) console.log("Market exists");
				var _sUrl = 'screens/' + role.role + " new3.png";
				this.viewport(viewport.width,viewport.height);
				if (this.click('a[tooltip="Market Place"]')){
					console.log("click over MARKET-PLACE exists");
					this.capture(_sUrl,{
						top:0,
						left:0,
						width:viewport.width,
						height:viewport.height
					})
					console.log("screenshot captured",_sUrl);
				}
				else console.log("cant't be clicked");

				if (this.exists(".menu-title")) console.log("Menu exists");
				var _sUrl = 'screens/' + role.role + " new4.png";
				this.viewport(viewport.width,viewport.height);
				if (this.click(".menu-title")){
					console.log("click over MENU-TITLE exists");
					this.capture(_sUrl,{
						top:0,
						left:0,
						width:viewport.width,
						height:viewport.height
					})
					console.log("screenshot captured",_sUrl);
				}
				else console.log("cant't be clicked");

				if (this.exists('a[tooltip="Support"]')) console.log("Support exists");
				var _sUrl = 'screens/' + role.role + " new5.png";
				this.viewport(viewport.width,viewport.height);
				if (this.click('a[tooltip="Support"]')){
					console.log("click over SUPPORT exists");
					this.capture(_sUrl,{
						top:0,
						left:0,
						width:viewport.width,
						height:viewport.height
					})
					console.log("screenshot captured",_sUrl);
				}
				else console.log("cant't be clicked");
			}
			else console.log("cant't be clicked");
						
			this.click('a[href="/signout"]');
			this.wait(2000,function(){
				console.log("Logging Out", role.role);
			});
		});
});
});
casper.run();