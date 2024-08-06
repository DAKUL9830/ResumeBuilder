

// export default Skills

import React from 'react';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

function Skills() {
  return (
    <div>
   
  
         {/* progLanguages */}

    
    <h4><b>Programming Languages</b></h4>
  <hr/>
<Form.List name="progLanguages">
        {(fields, { add, remove }) => (
          <>
          <div className='row'>
            {fields.map(({ key, name, ...restField }) => (
              <>
              <div  className='col-md-5'>
                <Form.Item
                  {...restField}
                  name={[name, 'progLanguages']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing prog languages',
                    },
                  ]}
                >
                  <Input placeholder="progLanguages (add all in one line)" />
                </Form.Item>
                </div>
                <div  className='col-md-1'>
                <MinusCircleOutlined style={{fontSize:25}} onClick={() => remove(name)} />
                  
                </div>
              </>
            ))}
            <Form.Item>
            <div className='col-md-3'>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add programming languages
              </Button>
              </div>
            </Form.Item>
            </div>
          </>
        
        )}
      </Form.List>
     
    
    
    
    <h4><b>Databases</b></h4>
  <hr/>
<Form.List name="dataBases">
        {(fields, { add, remove }) => (
          <>
          <div className='row'>
            {fields.map(({ key, name, ...restField }) => (
              <>
              <div className='col-md-5'>
                <Form.Item
                  {...restField}
                  name={[name, 'dataBases']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing databases',
                    },
                  ]}
                >
                  <Input placeholder="Databases (add all in one line)" />
                </Form.Item>
                </div>
                <div className='col-md-1'>
                <MinusCircleOutlined  style={{fontSize:25}} onClick={() => remove(name)} />
                </div>
              </>
            ))}
            <Form.Item>
            <div className='col-md-2'>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Databases
              </Button>
              </div>
            </Form.Item>
            </div>
          </>
        
        )}
      </Form.List>
     
    

   
    <h4><b>Tools</b></h4>
  <hr/>
<Form.List name="tools">
        {(fields, { add, remove }) => (
          <>
            <div className='row'>
            {fields.map(({ key, name, ...restField }) => (
              <>
              <div className='col-md-5'>
                <Form.Item
                  {...restField}
                  name={[name, 'tools']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing tools',
                    },
                  ]}
                >
                  <Input placeholder="Tools (add all in one line)" />
                </Form.Item>
                </div>
                <div className='col-md-1'>
                <MinusCircleOutlined  style={{fontSize:25}} onClick={() => remove(name)} />
                </div>
              </>
            ))}
            <Form.Item>
              <div className='col-md-2'>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Tools
              </Button>
              </div>
            </Form.Item>
            </div>
          </>
        
        )}
      </Form.List>
     
    

    
    <h4><b>Natural Languages</b></h4>
  <hr/>
<Form.List name="naturalLanguages">
        {(fields, { add, remove }) => (
          <>
          <div className='row'>
            {fields.map(({ key, name, ...restField }) => (
               <>
               <div className='col-md-5'>
                <Form.Item
                  {...restField}
                  name={[name, 'naturalLanguages']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing natural languages',
                    },
                  ]}
                >
                  <Input placeholder="Natural Languages (add all in one line)" />
                </Form.Item>
                </div>
                <div className='col-md-1'>
                <MinusCircleOutlined style={{fontSize:25}}  onClick={() => remove(name)} />
                </div>
              </>
            ))}
            <Form.Item>
              <div className='col-md-3'>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Natural Languages
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

export default Skills
