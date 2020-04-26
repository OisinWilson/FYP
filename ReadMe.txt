To start Project:

	Install Android Emulator (Android Studio)

	Install Node.js

	In Node.js 'cd XXX' to this project directory

	'npm install' in the project

	'expo start'

	On expo pop up 'Run on Andriod simulator'


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

