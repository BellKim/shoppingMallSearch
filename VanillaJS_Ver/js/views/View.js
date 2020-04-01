const tag = '[View]'

export default {
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },
//on, emit 메소드는 event 와 handler 의 인자를 같이 가져간다. 
//view 에서 이벤트를 어떻게 가져가는가. 
  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },
//on -=> 이벤트를 가져가면
//emit 은 이벤트를 어떻게 주는가에 대해서 
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },
  //dispatchEvent() 

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}