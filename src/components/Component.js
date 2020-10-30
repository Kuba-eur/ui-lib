import { QDate } from 'quasar'

export default {
  name: 'EBadge',
  props: {
    minimal: Boolean,
    value: String,
  },
  render (h) {
    return h(QDate, {
      staticClass: 'e-badge',
      props: {
        minimal: this.minimal,
        value: this.value,
      },
    })
  }
}
