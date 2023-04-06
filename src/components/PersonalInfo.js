import React from 'react'
import {Form,Input} from 'antd';

function PersonalInfo() {
    return (
        <div>
            <h4><b>Personal Info</b></h4>
                   <hr/>
            <div className='row'>
                <div className='col-md-5'>
                    <Form.Item name='firstName' label='First Name' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                    </div>
                    <div className='col-md-5'>
                    <Form.Item name='lastName' label='Last Name' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                    </div>
                    <div className='col-md-5'>
                    <Form.Item name='email' label='Email' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                    </div>
                    <div className='col-md-5'>
                    <Form.Item name='phoneNumber' label='Phone Number' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                </div>

            </div>
            
        </div>
    )
}

export default PersonalInfo
