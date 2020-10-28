import { QBtn } from 'quasar'

export default {
  name: 'EBadge',

  render (h) {
    return h(QBtn, {
      staticClass: 'e-badge',
      props: {
        label: 'ebadge'
      }
    })
  }
}
