const getResponse = async () => {
     try {
          const response = await axios.get('https://api.thecatapi.com/v1/images/search')
          const data = response.data[0].url
          console.log(data);
          document.querySelector(".meme-img").setAttribute("src", data)
     } catch (err) {
          console.log('err')
     }
}
getResponse()

