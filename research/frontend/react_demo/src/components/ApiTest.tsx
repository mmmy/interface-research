import React, {useState} from 'react'
import {loginUsingPOST} from "src/service_gen/UmsAdminController";

export default function ApiTest() {

  const [loginPending, setLoginPending] = useState(false)

  const queryLogin = async () => {
    setLoginPending(true)
    const loginParam: UmsAdminController.UmsAdminLoginParam = {
      username: 'admin',
      password: '123',
    }
    const res = await loginUsingPOST(loginParam)
    setLoginPending(false)
    console.log(res)
  }

  return <div>
    <h3>UmsAdminController</h3>
    <p>
      <button onClick={queryLogin} disabled={loginPending}>登录接口</button>
    </p>
    <p>请在开发工具中查看网络请求的参数</p>
  </div>
}