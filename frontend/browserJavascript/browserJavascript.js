function main() {
  console.log('Hola tu! Como estas?')

  axios.get('/cat').then(function(response) {
    console.log(response)
  })

}



main()