


import React from 'react';
//import {Form,Input} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd'


function Education() {
  // const onFinish = (values) => {
  //   console.log('Received values of form:', values);
  // };
  return (
    <div>
           


  <h4><b>Education</b></h4>
  <hr/>
<Form.List name="education">
        {(fields, { add, remove }) => (
          <>
          <div className='row'>
            {fields.map(({ key, name, ...restField }) => (
              <>
                  <div className='col-md-3'>
                <Form.Item
                  {...restField}
                  name={[name, 'school']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing school name',
                    },
                  ]}
                >
                  <Input placeholder="School" />
                </Form.Item>
                </div>
                <div className='col-md-3'>
                <Form.Item
                  {...restField}
                  name={[name, 'relevantCourseWork']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing Course Work',
                    },
                  ]}
                >
                  <Input placeholder="Relevant Course Work" />
                </Form.Item>
                </div>
                <div className='col-md-2'>
                <Form.Item
                  {...restField}
                  name={[name, 'graduationMonth']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing graduation month',
                    },
                  ]}
                >
                  <Input placeholder="Graduation Month" />
                </Form.Item>
                </div>
                <div className='col-md-2'>
                <Form.Item
                  {...restField}
                  name={[name, 'graduationYear']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing graduation year',
                    },
                  ]}
                >
                  <Input placeholder="Graduation Year" />
                </Form.Item>
                </div>
                <div className='col-md-2'>
                <MinusCircleOutlined style={{fontSize:25}}onClick={() => remove(name)} />
                </div>
                
              </>
            ))}
            <Form.Item>
            <div className='col-md-2'>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Education
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

export default Education
