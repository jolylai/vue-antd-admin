import {
  Button,
  Form,
  Input,
  Icon,
  Menu,
  Layout,
  Select,
  PageHeader,
  Steps,
  message,
  notification,
  Space,
  Divider,
  Alert,
  Result,
  Card,
  Row,
  Col,
  DatePicker,
  TimePicker
} from 'ant-design-vue'

export default app => {
  app.use(Button)
  app.use(Form)
  app.use(Input)
  app.use(Icon)
  app.use(Menu)
  app.use(Layout)
  app.use(PageHeader)
  app.use(Select)
  app.use(Steps)
  app.use(Space)
  app.use(Divider)
  app.use(Alert)
  app.use(Result)
  app.use(Card)
  app.use(Row)
  app.use(Col)
  app.use(DatePicker)
  app.use(TimePicker)

  app.config.globalProperties.$message = message
  app.config.globalProperties.$notification = notification
}
