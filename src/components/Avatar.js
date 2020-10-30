import { QAvatar } from 'quasar'

export default {
  name: 'EcAvatar',
  props: {
    color: String,
    textColor: String,
    icon: String,
  },
  render (h) {
    return h(QAvatar, {
      staticClass: 'ec-avatar',
      props: {
        color: this.color,
        textColor: this.textColor,
        icon: this.icon,
      },
    })
  }
}
