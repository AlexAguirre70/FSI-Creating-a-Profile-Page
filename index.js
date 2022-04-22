let content = document.querySelector('.js-generated.content')
    let header= document.createElement('h1')
    header.setAttribute('class', 'dog-name')                 
    header.append('Rizzo')
content.append(header)

    let container= document.createElement('div')
    container.setAttribute('class','dog-content')

        let dogimage = document.createElement('img')
        dogimage.setAttribute('src','./assets/rizzo.jpg')
        dogimage.setAttribute('class','dog-image')
    container.append(dogimage)

    let container2 = document.createElement('div')
    container2.setAttribute('class','dog-details')
        let header3= document.createElement('h3')
        header3.textContent='Description:'
        container2.append(header3)
        
        let dogdetails = document.createElement('p')
        dogdetails.textContent ="This gentle dog is aloof toward her owner, and never comes when called.       She always acts as though any stranger she meets will harm her, and       dislikes other animals."
        container2.append(dogdetails)

        let header3b= document.createElement('h3')
        header3b.textContent='Feeding Times:'
        container2.append(header3b)

        let list=document.createElement('ul')
            let listitem1 = document.createElement('li')
            listitem1.textContent='9:00 am'
            list.append(listitem1)

            let listitem2 = document.createElement('li')
            listitem2.textContent='12:00 pm'
            list.append(listitem2)

            let listitem3 = document.createElement('li')
        listitem3.textContent='5:00 pm'
        list.append(listitem3)
            container2.append(list)

container.append(container2)
content.append(container)