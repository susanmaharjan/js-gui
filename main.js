const add = (x, y) => { return x + y }



const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guest').value.replace(regex, '')
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const ans = `${s}, your sum is ${add(i, j)}.`
    document.querySelector('#result').innerHTML = ans
  }

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'length') { updatelength(event) }
}