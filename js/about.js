const cities = ["Barcelona", "Prague", "Saint-Petersburg", "New-York", "Stambul", "Copenhagen", "Brugge", "Venice"]
const cityLink = {
    "Barcelona": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131710.9076474123!2d2.0732373120452676!3d41.38769150269583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2z0JHQsNGA0YHQtdC70L7QvdCwLCDQmNGB0L_QsNC90LjRjw!5e0!3m2!1sru!2sil!4v1689172796656!5m2!1sru!2sil",
    "Prague": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163930.61388268464!2d14.300817517023823!3d50.05977340522337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2z0J_RgNCw0LPQsCwg0KfQtdGF0LjRjw!5e0!3m2!1sru!2sil!4v1689199634257!5m2!1sru!2sil",
    "Saint-Petersburg": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511631.1374315337!2d29.435360551726998!3d59.93945743721113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a6f9d%3A0xfa47ca5a4725c9e4!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sil!4v1689199700973!5m2!1sru!2sil",
    "New-York": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360307842!2d-74.30932431155756!3d40.697539970003625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sil!4v1689199771992!5m2!1sru!2sil",
    "Stambul": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.6059676668!2d29.01217945!3d41.0053215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2z0KHRgtCw0LzQsdGD0LssINCi0YPRgNGG0LjRjw!5e0!3m2!1sru!2sil!4v1689199808956!5m2!1sru!2sil",
    "Copenhagen": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144001.96629401288!2d12.282022208460361!3d55.6710658904083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2z0JrQvtC_0LXQvdCz0LDQs9C10L0sINCU0LDQvdC40Y8!5e0!3m2!1sru!2sil!4v1689342732198!5m2!1sru!2sil",
    "Brugge": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159790.71352608348!2d3.0573020426486814!3d51.260882313957794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c350d0c11e420d%3A0x1aa2f35ac8834df7!2z0JHRgNGO0LPQs9C1LCDQkdC10LvRjNCz0LjRjw!5e0!3m2!1sru!2sil!4v1689342874355!5m2!1sru!2sil", 
    "Venice": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179278.832880437!2d12.22252544732961!3d45.404665810976546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2z0JLQtdC90LXRhtC40Y8sINCY0YLQsNC70LjRjw!5e0!3m2!1sru!2sil!4v1689342975616!5m2!1sru!2sil"
}


const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentlySelected = 0;
const cityNow = document.getElementById('city');
function updateLink() {
    cityNow.src = cityLink[cities[currentlySelected]];
  }



prevBtn.addEventListener('click', function() {
    currentlySelected--;
    nextBtn.disabled = false;
    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
    updateLink();
});

nextBtn.addEventListener('click', function() {
    currentlySelected++;
    prevBtn.disabled = false;
    if (cities.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }
    updateLink();
});

updateLink();
