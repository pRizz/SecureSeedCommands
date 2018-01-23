import Vue from 'vue'
import Router from 'vue-router'
import SecureSeedCommandList from '@/components/SecureSeedCommandList'
import SecureSeedCommandMatrix from '@/ViewModels/SecureSeedCommandMatrix'
import CryptocurrencyType from '@/ViewModels/CryptocurrencyType'

Vue.use(Router)

function commandListForCryptocurrencyType(cryptocurrencyType) {
  return SecureSeedCommandMatrix.find((el) => el.cryptocurrencyType === cryptocurrencyType)
}

const secureSeedCommandRoutes = SecureSeedCommandMatrix.map((secureSeedCommands) => {
  return {
    path: secureSeedCommands.cryptocurrencyType.pathName,
    component: SecureSeedCommandList,
    props: {
      currentSeedCommandToken: secureSeedCommands
    }
  }
})

export default new Router({
  routes: secureSeedCommandRoutes.concat(
    [
      {
        path: '/',
        name: 'RaiBlocks',
        component: SecureSeedCommandList,
        props: {
          currentSeedCommandToken: commandListForCryptocurrencyType(CryptocurrencyType.raiBlocks)
        }
      }
    ]
  )
})
