<template>
	<v-text-field @input="onInput($event)" ref="number" v-bind="$attrs" v-model="numberTemp"></v-text-field>
</template>

<script>
export default {
  name: 'v-money-field',
  props: {
    value: null,
    locale: {
      type: String,
      default: 'vi'
    }
  },
  data: () => ({
    numberTemp: null
  }),

  mounted() {
    if (this.value) {
      this.parseNumber(this.value.toString())
    }
  },
  methods: {
    reverseFormatNumber(val, locale) {
      var group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, '')
      console.log(group)

      var decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '')
      var reversedVal = val.replace(new RegExp('\\' + group, 'g'), '')
      reversedVal = reversedVal.replace(new RegExp('\\' + decimal, 'g'), '.')
      return reversedVal && Number.isNaN(reversedVal) ? 0 : reversedVal
    },
    formatNumber(val, locale) {
      return new Intl.NumberFormat(locale, {
        style: 'decimal'
      }).format(val)
    },
    parseNumber(val) {
      if (val) {
        // console.log('Bắt đầu xử lý')
        let temp = this.reverseFormatNumber(val, this.locale)
        this.$emit('input', temp)
        let result = this.formatNumber(temp, this.locale)
        console.log(result)

        let component = this.$refs.number
        component.$vnode.context[
          component.$vnode.data.model.expression
        ] = result
      }
    },
    onInput(val) {
      this.parseNumber(val.toString())
    }
  }
}
</script>

<style>
</style>
