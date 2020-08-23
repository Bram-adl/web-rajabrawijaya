// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-database.js');

var firebaseConfig = {
    apiKey: "AIzaSyCppZPGspEMOoxRWCq3RVbaC0G17ktwILs",
    authDomain: "rajabrawijaya.ub.ac.id",
    //authDomain: "raja-brawijaya-1b316.firebaseapp.com",
    databaseURL: "https://raja-brawijaya-1b316.firebaseio.com",
    projectId: "raja-brawijaya-1b316",
    storageBucket: "raja-brawijaya-1b316.pot.com",
    messagingSenderId: "315789839205",
    appId: "1:315789839205:web:06312e4608c4cb63faef8c",
    measurementId: "G-15TNG0D62W"
};
firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function(payload) {
// 	console.log('[firebase-messaging-sw.js] Received background message ', payload);
// 	const notificationTitle = 'Background Message Title';
// 	const notificationOptions = {
// 		body: 'Background Message body.',
// 		icon: '/firebase-logo.webp'
// 	};
// 	return self.registration.showNotification(notificationTitle, notificationOptions);
// });