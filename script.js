const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)


function getData() {
    header.innerHTML = '<img src="http://images.summitmedia-digital.com/spotph/images/2022/06/30/guide-to-everyhing-laptop-640-1656580338.jpg" alt=""/>'

    title.innerHTML = 'Lorem ipsum dolor sit amet.'

    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, a.'

    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/11.jpg" alt="">'

    name.innerHTML = 'John Doe'

    date.innerHTML = '0ct 08, 2020'


    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}





