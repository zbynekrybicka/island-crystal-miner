import axios from 'axios'

const baseUrl = 'http://localhost:8080'

const helloAction = (loader, setHelloAtom) => {
    loader(true)
    axios.get(baseUrl + "/hello?foo=bar",)
      .then(res => setHelloAtom(JSON.stringify(res.data)))
      .finally(() => loader(false))
}

export default helloAction