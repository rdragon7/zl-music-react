import { memo, useRef, useState } from 'react'

import { Button, Col, Form, Input, Row, message } from 'antd'
import { sendCode, testCode } from '@/api/login'

import { LoginBoxWrapper } from './style'
import { useAppDispatch } from '@/store/hook'
import { changeIsShowLogin } from '@/store/slice/loginSlice'

const ZLLoginBox = memo(() => {
  // state & props
  const [phone, setPhone] = useState('')
  const [messageApi] = message.useMessage()

  // redux hooks
  const dispatch = useAppDispatch()

  // other hooks
  const codeRef = useRef<any>()
  // action
  const onFinish = (values: any) => {
    testCode(values.phone, values.code).then(res => {
      if (res.data.code === 200) {
        messageApi.info('登录成功')
        dispatch(changeIsShowLogin(false))
      }
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  // 发送验证码
  const sendCodes = () => {
    if (phone) {
      sendCode(15617162196)
    } else {
      messageApi.warning('请填写手机号!')
    }
  }

  const handleChange = (e: any) => {
    setPhone(e.target.value)
  }

  const closeLogin = () => {
    dispatch(changeIsShowLogin(false))
  }

  return (
    <LoginBoxWrapper>
      <div className="box-header">
        <span>手机号登录</span>
        <i className="close" onClick={() => closeLogin()}></i>
      </div>
      <div className="box-content">
        <div className="center">
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ minWidth: 320 }}
          >
            <Row>
              <Col span={24}>
                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: '请输入手机号!' }]}
                >
                  <Input
                    placeholder="请输入手机号"
                    className="st phone"
                    ref={codeRef}
                    onChange={e => handleChange(e)}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={4}>
              <Col span={16}>
                <Form.Item
                  name="code"
                  rules={[{ required: true, message: '请输入短信验证码!' }]}
                >
                  <Input placeholder="请输入短信验证码" className="st code" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Button className="st send" onClick={() => sendCodes()}>
                  发送验证码
                </Button>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="st btn">
                    登录
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="box-footer">
        <a href="/todo">&lt;&nbsp;其他登录方式</a>
      </div>
    </LoginBoxWrapper>
  )
})

export default ZLLoginBox
