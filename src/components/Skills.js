// import React from 'react';
// import {TextField, Button, Container} from '@material-ui/core';
// import {Card, CardHeader, CardContent} from '@material-ui/core';
// import {Paper, withStyles, Grid} from '@material-ui/core';
// import {Row, Col} from 'react-bootstrap';

// function Skills({handleClickForward,handleClickBackward,value,handleChangeProgLang,handleChangeDatabase,handleChangeTools,handleChangeNatLang}) {

 
  
//     return (

//         <Paper>
       
//     <Card>
//         <CardHeader title ="Skills"/>
//     </Card>
//    <CardContent>
//        <Grid container spacing={2} align items='center' lg={12}>
//            <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//     value={value.progLanguages}
//     label="Prog Languages"
//     onChange={handleChangeProgLang}

//     />
//     </Grid>
    
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//      value={value.database}
//     label="Database"
//     onChange={handleChangeDatabase}
//     />
//     </Grid>
  
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//       value={value.tools}
//     label="Tools"
//     onChange={handleChangeTools}
        
//         />
//         </Grid>
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//       value={value.naturalLanguages}
//     label="Natural Languages"
//     onChange={handleChangeNatLang}
        
//     />
//     </Grid>
//     <Button
//         color='grey'
//        >
//           ADD
//         </Button>
  
       
//         </Grid>
//         <Button
//         color='grey'
//         onClick={handleClickForward}>
//           NEXT
//         </Button>

//         <Button
//         color='grey'
//         onClick={handleClickBackward}>
//           BACK
//         </Button>

         
//         </CardContent>
//         </Paper>
//     )
// }

// export default Skills

import React from 'react';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
const onFinish = (values) => {
  console.log('Received values of form:', values);
};

function Skills() {
  return (
    <div>
    {/* <div className='row'>
        <div className='col-md-5'>
            <Form.Item name='progLanguages' label='Prog Languages' rules={[{required:true}]}>
               <Input/>
            </Form.Item>
            </div>
            <div className='col-md-5'>
            <Form.Item name='dataBase' label='Database' rules={[{required:true}]}>
               <Input/>
            </Form.Item>
            </div>
            <div className='col-md-5'>
            <Form.Item name='tools' label='Tools' rules={[{required:true}]}>
               <Input/>
            </Form.Item>
            </div>
            <div className='col-md-5'>
            <Form.Item name='naturalLanguages' label='Natural Languages' rules={[{required:true}]}>
               <Input/>
            </Form.Item>
        </div>

    </div> */}


{/* <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
<Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'progLanguages']}
                  rules={[
                    {
                      required: true,
                      message: 'Misssin prog languages',
                    },
                  ]}
                >
                  <Input placeholder="progLanguages" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'databases']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing databases',
                    },
                  ]}
                >
                  <Input placeholder="Databases" />
                </Form.Item>
                
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
                  <Input placeholder="Tools" />
                </Form.Item>
               
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
                  <Input placeholder="Natural Languages" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        
        )}
      </Form.List>
      {/* <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
  
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
