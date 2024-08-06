

// export default Projects

import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd'

const {TextArea} =Input;


function Projects() {
  return (
    <div>
   


<h4><b>Projects</b></h4>
  <hr/>
<Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
          <div className='row'>
            {fields.map(({ key, name, ...restField }) => (
              <>
              <div className='col-md-3'>
                <Form.Item
                  {...restField}
                  name={[name, 'projectName']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing project name',
                    },
                  ]}
                >
                  <Input placeholder="Project Name" />
                </Form.Item>
                </div>
                <div className='col-md-2'>
                <Form.Item
                  {...restField}
                  name={[name, 'gitHubLink']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing github link',
                    },
                  ]}
                >
                  <Input placeholder="GitHub Link" />
                </Form.Item>
                </div>
                <div className='col-md-2'>
                <Form.Item
                  {...restField}
                  name={[name, 'liveLink']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing live link',
                    },
                  ]}
                >
                  <Input placeholder="Live Link" />
                </Form.Item>
                </div>
                <div className='col-md-10'>
                <Form.Item
                  {...restField}
                  name={[name, 'description']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing description',
                    },
                  ]}
                >
                  <TextArea placeholder="Description" />
                </Form.Item>
                </div>
                <div className='col-md-1'>
                <MinusCircleOutlined  style={{fontSize:25}} onClick={() => remove(name)} />
                </div>
              </>
            ))}
            <Form.Item>
              <div className='col-md-2'>
              <Button   type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add project
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

export default Projects

