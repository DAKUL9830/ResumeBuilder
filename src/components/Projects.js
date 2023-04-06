// import React from 'react';
// import {TextField, Button, Container} from '@material-ui/core';
// import {Card, CardHeader, CardContent} from '@material-ui/core';
// import {Paper, withStyles, Grid} from '@material-ui/core';
// import {Row, Col} from 'react-bootstrap';

// function Projects({handleClickForward,handleClickBackward,value,handleChangeProjName,handleChangeGitHub,handleChangeLiveLink,handleChangeDescr}) {
  
  
//     return (

//         <Paper>
       
//     <Card>
//         <CardHeader title ="Projects Highlights"/>
//     </Card>
//    <CardContent>
//        <Grid container spacing={2} align items='center' lg={12}>
//            <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//     value={value.projectName}
//     label="Project Name"
//     onChange={handleChangeProjName}

//     />
//     </Grid>
    
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//      value={value.githubLink}
//     label="GitHub Link"
//     onChange={handleChangeGitHub}
//     />
//     </Grid>
  
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//       value={value.liveLink}
//      label="Live Link"
//      onChange={handleChangeLiveLink}
        
//         />
//         </Grid>
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//       value={value.description}
//     label="Description"
//     onChange={handleChangeDescr}
        
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

// export default Projects

import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd'

const {TextArea} =Input;
const onFinish = (values) => {
  console.log('Received values of form:', values);
};

function Projects() {
  return (
    <div>
    {/* <div className='row'>
        <div className='col-md-5'>
            <Form.Item name='projectName' label='Project Name' rules={[{required:true}]}>
               <Input/>
            </Form.Item>
            </div>
            <div className='col-md-5'>
            <Form.Item name='githubLink' label='GitHub Link' rules={[{required:true}]}>
               <Input/>
            </Form.Item>
            </div>
            <div className='col-md-5'>
            <Form.Item name='liveLink' label='Live Link' rules={[{required:true}]}>
               <Input/>
            </Form.Item>
            </div>
            <div className='col-md-5'>
            <Form.Item name='description' label='Description' rules={[{required:true}]}>
               <Input/>
            </Form.Item>
        </div>

    </div> */}


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

