const turnOff = document.querySelector('.turnOff')

        turnOff.addEventListener('click', () => {
            document.querySelector('.light').style.boxShadow = "0 0 0 0"
            document.querySelector('.light1').style.boxShadow = "0 0 0 0"
            document.querySelector('.light2').style.boxShadow = "0 0 0 0"

        })

        const turnOn = document.querySelector('.turnOn')

        turnOn.addEventListener('click', () => {
            document.querySelector('.light').style.boxShadow = "0.1rem 0.3rem 0.5rem 0.5rem white,0.9rem 0.8rem  8rem 1.4rem white"
            document.querySelector('.light1').style.boxShadow = "0.1rem 0.3rem 0.5rem 0.5rem white,0.9rem 0.8rem  8rem 1.4rem white"
            document.querySelector('.light2').style.boxShadow = "0.1rem 0.3rem 15rem 0.5rem white,0.1rem 0.1rem  0.8rem 0.1rem white"

        })

