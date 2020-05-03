
Project:

	Install Android Emulator (Android Studio)

	Install Node.js

	In Node.js 'cd XXX' to this project directory

	'npm install' in the project

	'expo start'

	On expo pop up 'Run on Andriod simulator'


API:
	To Start
		run cmd
		cd C:\development\tomcat
		.\bin\catalina.bat start

	To Stop
		run cmd
		cd C:\development\tomcat
		.\bin\catalina.bat stop

	Example Input to brouser
		http://localhost:8080/celitrackerrestapi/device/event?token=f08d9cedad8fa2948008e3c80ca98c501d64a74e81b1fd9381ee03a0a5fde249
		http://localhost:8080/celitrackerrestapi/device/event/time?seconds=10


Known Issue starting React Native on Expo :

	In "\node_modules\metro-config\src\defaults\blacklist.js"

	Change => var sharedBlacklist = [
  			/node_modules[/\\]react[/\\]dist[/\\].*/,
  			/website\/node_modules\/.*/,
  			/heapCapture\/bundle\.js/,
  			/.*\/__tests__\/.*/
			];

	To This => var sharedBlacklist = [
  			/node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  			/website\/node_modules\/.*/,
  			/heapCapture\/bundle\.js/,
  			/.*\/__tests__\/.*/
			];


Special Thanks to :  

monkik	- Barcode Image (https://www.flaticon.com/free-icon/barcode_664456?term=barcode&page=1&position=1)

Ahkâm - Input Image (https://www.freeiconspng.com/img/8604)

Ahkâm - House Image (https://www.freeiconspng.com/img/202)

Ahkâm - Calandar Image (https://www.freeiconspng.com/img/4096)

