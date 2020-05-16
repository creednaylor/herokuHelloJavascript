function main() {
  console.log('Hola tu! Como estas?')

  axios.get('/cat').then(function(response) {
    var data = response.data;
    console.log(data)
  })

}



main()