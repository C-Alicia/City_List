// IIFE - Pour proteger la fonction, on effectué à l'interieur de la fonction anonyme et auto incrementé//
/* On déclare une constante ou let avec un objet litéraux -> methode sont : propriéte + méthode : allCities : []*/
/* On declare 1 fois la grande variable ensuite dans les autre on rappel this.cityList */
/* On creer un iniateur d'objet avec la fonction init*/
/* This est un objet */
/* On creer la fonction getdom ()  et on utlise un mot clef*/
/* On recupere les élements du DOM this.nomdelapropriete = document.querySelector() dans la fonction getdom function()*/
/* On ajouter une methode qui permet d'ajouter des evenements avec la methode addEvent*/
/* On creer une fonction addCityToArray + elle va ajouter les donnée dans this.cities */
/* On remplace this = fait reference à l'objet allcities et on change le contexte avec bind du bouton this va faire reference a l'evenement*/
/* On push dans le tableau + on vide la valeur de l'input this.city.value = "" */
/* focus permet de recliquer sur l'input*/
/* On fait une function render on effectuer une boucle */
/* Delegation d'évenement - on creer un advent listner + on creer une fonction Deletecities*/
/* Filter -> permet de supprimer un élément d'un tableau */
/* On appelle la méthode render qui permet d'afficher le tableau */

;(function () {
  const cities = {
    allCities: [],

    getdom: function () {
      this.cityList = document.querySelector('#city_list')
      this.city = this.cityList.querySelector('#city')
      this.cityAdd = this.cityList.querySelector('#add_city')
      this.cities = this.cityList.querySelector('#cities')
    },

    addEvent: function () {
      this.cityAdd.addEventListener('click', this.addCityToArray.bind(this))
      this.cities.addEventListener('click', this.deletecities.bind(this))
    },

    addCityToArray: function () {
      this.allCities.push(this.city.value)
      this.city.value = ''
      this.city.focus()
      this.render()
    },

    render: function () {
      this.cities.innerHTML = ''

      for (let city of this.allCities) {
        this.cities.innerHTML +=
          '<span>' +
          city +
          '</span>' +
          '<i class="del fa-sharp fa-solid fa-circle-xmark"></i>'
      }
    },

    deletecities: function (e) {
      if (e.target.classList.contains('del')) {
        let city = e.target.previousElementSibling.innerHTML

        this.allCities = this.allCities.filter(function (ville) {
          return city !== ville
        })
      }
      this.render()

      /*   console.log(this.allCities) */
    },

    init: function () {
      this.getdom()
      this.addEvent()
    },
  }
  cities.init()
})()
