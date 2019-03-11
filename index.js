'use strict'

import VMoneyField from './components/MoneyField.vue'

const optionsDefaults = {
  // Retrieves the current logged in user that is posting a comment
  locale: 'us'
}

export default {
  install(Vue, opts) {
    const globalOptions = { ...optionsDefaults, ...opts }
    Vue.component(VMoneyField.name, VMoneyField)
    Vue.filter('money', function(val, opts) {
      const options = { ...globalOptions, ...opts }

      let result = new Intl.NumberFormat(options.locale, {
        style: 'decimal'
      }).format(val)

      if (options.formatThousands && result.endsWith('.000')) {
        result = result.slice(0, -4)
        result = `${result} k`
      }

      return result
    })
  }
}
