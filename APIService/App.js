import styles from './style'
import './style.css'
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from './components'

import {
  postRequest,
  getRequest,
  deleteRequest,
  putRequest,
  customRequest,
  useCustomFetchHook,
} from './APIService/ApiService'

const App = () => {
  const get = async () => {
    await getRequest(
      'https://random-data-api.com/api/omniauth/google_get',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => {
        console.log('res', res?.data)
      })
      .catch((err) => console.log('err', err))
    console.log('get')
  }
  const post = async () => {
    await postRequest(
      'http://apm-demo.yalpos.com/api/login',
      {
        email: 'name1@gmail.com',
        password: 'name1',
      },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => console.log('err', err))
    console.log('post')
  }
  const custom = async () => {
    await customRequest({
      method: 'get',
      url: 'https://random-data-api.com/api/omniauth/google_get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => console.log('err', err))
    console.log('custom')
  }

  return (
    <div className="row">
      <button
        onClick={(e) => {
          get()
        }}
        style={{ backgroundColor: 'blue' }}
      >
        get
      </button>
      <button
        onClick={(e) => {
          post()
        }}
        style={{ backgroundColor: 'red' }}
      >
        post
      </button>
      <button
        onClick={(e) => {
          custom()
        }}
        style={{ backgroundColor: 'green' }}
      >
        custom
      </button>
    </div>
  )
}

export default App
