import FormView from '../views/FormView.js'
const tag = '[MainController]'


export default{
    init(){
        console.log(tag, 'init() start now ');
        //쿼리셀렉터를 이용해서 form 테그를 포함한 부분만 init으로 넘겨준다. 
        FormView.setup(document.querySelector('form'))
        .on('@submit', e => this.onSubmit(e.detail.input))
        
        //setup에서 체인잉을 이용해서 on메소드를 시행했을경우에는 setup에서 this를 리턴해주는것을 알아야한다. 
    },
    onSubmit(input){
        console.log(tag, 'onSubmit()', input)
    }

}


