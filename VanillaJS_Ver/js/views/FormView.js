import view from './View.js'

const tag = '[FormView]'//테그생성.

const FormView = Object.create(view)
//objectCreate로 Formview에 view 객체 복사

FormView.setup = function(el) { //setup메소드 생성
    //HTML element를 주입받아서 내부적으로 속성을 갖도록 한다.

    this.init(el)//view.js 에init메소드에 의해서 el엘리멘트를 주입받아서  속성값을 갖도록함. 
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')//내부적으로 속성값을 갖도록 한다.

    this.showResetBtn(false)//showReset버튼메소드를 통해서 reset EL은 숨김처리힌다. 
    this.bindEvent()
    return this;
}

//숨김처리 기본설정을한다. 
FormView.showResetBtn = function(show=true){//default true setting
    this.resetEl.style.display = show?'block':'none'
}

FormView.bindEvent = function(){
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

FormView.onKeyup = function(e){
    //입력한 문자열이 있을때만(length가 있을때만) ture가 되도록한다.
    this.showResetBtn(this.inputEl.value.length);

    //엔터키 구별
    const enter = 13;
    if(e.keyCode != enter){return}//엔터키가 아니라면 그냥 리턴한다.
    //todo.....(엔터키를 입력시 겁색 결괴가 나오도록 한다. )
    /*formview=> controller에게 엔터키를 입력했다고 알려줌.
    controller는 resultview 에게 전달해준다. */
    this.emit('@submit', {input:this.inputEl.value})
}




//폼뷰를 controller 에서 사용하기 위해서 export 한다. 
export default FormView


