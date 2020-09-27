import React from "react"
import { Form, Input, InputNumber, Button, Card, Row, Col } from "antd"
import API from "../api"
// import { Form, Input, InputNumber, Card, Row, Col } from "antd"

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

// const [interest, setInterest] = useState()

const CalcInterestForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    handleSubmit(values)
    // console.log("Received values of form: ", values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  const onReset = () => {
    form.resetFields()
  }

  const handleSubmit = (values) => {
    // console.log(values.principal)
    // event.preventDefault()

    API.get(`amort/api/v1.0/interest`, {
      params: {
        principal: values.principal,
        term: values.term,
        payment: values.payment,
      },
    }).then((res) => {
      form.setFieldsValue({ interest: res.data.payload.interest })
      // console.log(res)
      // console.log(res.data)
    })
  }

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "60vh" }}
    >
      <Col>
        <Card title="Find Interest Rate" style={{ width: 640 }}>
          <Form
            {...layout}
            name="basic"
            className="interest-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            form={form}
          >
            <Form.Item
              label="Principal"
              name="principal"
              rules={[{ required: true, message: "Please input Principal!" }]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Term"
              name="term"
              rules={[
                { required: true, message: "Please input Term(months)!" },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              label="Payment"
              name="payment"
              rules={[
                { required: true, message: "Please input Payment(month)!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Interest" name="interest">
              <Input disabled={true} />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default CalcInterestForm
