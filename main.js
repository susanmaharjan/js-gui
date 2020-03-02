

const updatelength= async(event)=>{
  document.querySelector('#result').innerHTML = ''
  const j= name.length('#guest')
  const ans = `${s},length of the word is ${(j)}.`
    document.querySelector('#result').innerHTML = ans
  }

}

// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up



document.addEventListener('click', event => {
  if (event.target && event.target.id === 'length') { updatelength(event) }
})