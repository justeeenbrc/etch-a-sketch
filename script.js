const container = document.querySelector('.container')
const gridSize = document.querySelector('.size')
let size = gridSize.value;
const color = document.querySelector('.colorPicker')
let draw = false;
const resetBtn = document.querySelector('.resetBtn')

function makeGrid (size) {
  container.style.setProperty('--size', size)
  for(let i = 0; i<size*size; i++){
    const div = document.createElement('div')
    div.classList.add('pixel')
    div.addEventListener('mouseover', function(){
      if(!draw) return
      div.style.backgroundColor = color.value
    })
    div.addEventListener('mousedown', function(){
      if(!draw) return
      div.style.backgroundColor = color.value
    })
    container.appendChild(div)
  }
}

window.addEventListener('mousedown', function(){
    draw = true;
})
window.addEventListener('mouseup', function(){
  draw = false;
})

function reset(){
  container.innerHTML = ''
  makeGrid(size)
}

resetBtn.addEventListener('click', reset)

gridSize.addEventListener('change', function(){
  size=gridSize.value
  reset()
})

makeGrid(size)