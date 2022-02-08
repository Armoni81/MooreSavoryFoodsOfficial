const open = document.getElementById('open')
        const close = document.getElementById('close')
        const container = document.querySelector('.container')
        const catMo = document.getElementById('cat-mo')
        var sizeup = document.getElementById('sizeup')
        
        open.addEventListener('click', () => container.classList.add('show-nav'))
        close.addEventListener('click', () => container.classList.remove('show-nav'))

        function handleClick(element){
            element.innerHTML= "MSF"
            element.sytle.color = 'blue'
        }

       