import { Button, Form, Input, Icon, Menu, Layout, message, notification } from 'ant-design-vue'

export default app => {
  app.use(Button)
  app.use(Form)
  app.use(Input)
  app.use(Icon)
  app.use(Menu)
  app.use(Layout)

  app.config.globalProperties.$message = message
  app.config.globalProperties.$notification = notification
}
