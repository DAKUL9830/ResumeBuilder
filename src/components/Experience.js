
// export default Experience

import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
const {TextArea}=Input;


//import {Form,Input} from 'antd';
//const {TextArea} =Input;

function Experience() {
  return (
    <div>
           


<h4><b>Experience</b></h4>
  <hr/>
<Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
          <div className='row'>
            {fields.map(({ key, name, ...restField }) => (
              <>
              <div className='col-md-3'>
                <Form.Item
                  {...restField}
                  name={[name, 'company']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing company'
                    }
                  ]}
                >
                  <Input placeholder="Company" />
                </Form.Item>
                </div>
                <div className='col-md-3'>
                <Form.Item
                  {...restField}
                  name={[name, 'position']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing position',
                    },
                  ]}
                >
                  <Input placeholder="Position" />
                </Form.Item>
                </div>
                <div className='col-md-2'>
                <Form.Item
                  {...restField}
                  name={[name, 'whenDidYouStart']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing start date',
                    },
                  ]}
                >
                  <Input placeholder="When did you start?" />
                </Form.Item>
                </div>
                <div className='col-md-2'>
                <Form.Item
                  {...restField}
                  name={[name, 'ifFinishedWhen']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing end date',
                    },
                  ]}
                >
                  <Input placeholder="If finished ,when?" />
                </Form.Item>
                </div>
                <div className='col-md-10'>
                <Form.Item
                  {...restField}
                  name={[name, 'whatIsYourInTheCompany']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing description',
                    },
                  ]}
                >
                  <TextArea placeholder="What is/was your work in the company?" />
                </Form.Item>
                </div>
                <div  className='col-md-1'>
                <MinusCircleOutlined  style={{fontSize:25}} onClick={() => remove(name)} />
                </div>
              </>
            ))}
            <Form.Item>
              <div className='col-md-2'>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add experience
              </Button>
              </div>
            </Form.Item>
            </div>
          </>
        )}
      </Form.List>
     
   
            
            
        </div>
    
  )
}

export default Experience




