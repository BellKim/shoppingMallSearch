import MainController from './controllers/MainController.js'
document.addEventListener('DOMContentLoaded', () => {//when dom content loading is finished, main controller.init method is execute
    console.log('DOM is filly loaded and parsed');
    MainController.init()
})