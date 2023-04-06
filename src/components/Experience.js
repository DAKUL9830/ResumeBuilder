
// import React from 'react';
// import {saveAs} from 'file-saver';
// import {TextField, Button, Container} from '@material-ui/core';
// import {Card, CardHeader, CardContent} from '@material-ui/core';
// import {Paper, withStyles, Grid} from '@material-ui/core';
// import {Row, Col} from 'react-bootstrap';

// function Experience({handleClickBackward,value,download,submit,handleChangeCompany,handleChangePosition,handleChangeStartDate,handleChangeEndDate,handleChangeDescrWork}) {
          
  
//     return (

//         <Paper>
       
//     <Card>
//         <CardHeader title ="Work Experience"/>
//     </Card>
//    <CardContent>
//        <Grid container spacing={5} align items='center' lg={12}>
//            <Grid item md={6} sm={12} xs={12} lg={15}>
//     <TextField
//     value={value.company}
//     label="Company"
//     onChange={handleChangeCompany}

//     />
//     </Grid>
    
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//      value={value.position}
//     label="Position"
//     onChange={handleChangePosition}
//     />
//     </Grid>
  
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//       value={value.startDate}
//     label="When did you start"
//     onChange={handleChangeStartDate}
        
//         />
//         </Grid>
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//       value={value.endDate}
//     label="If finished,when?"
//     onChange={handleChangeEndDate}
        
//     />
//     </Grid>
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//       value={value.descriptionWork}
//     label="What is/was your work in the company?"
//     onChange={handleChangeDescrWork}
        
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
//         onSubmit={submit}
//         >
//           Submit
//         </Button>
//         <Button
//         color='grey'
//         onClick={download}
//         >
//           Download
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

// export default Experience

import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
const {TextArea}=Input;
const onFinish = (values) => {
  console.log('Received values of form:', values);
};

//import {Form,Input} from 'antd';
//const {TextArea} =Input;

function Experience() {
  return (
    <div>
            {/* <div className='row'>
                <div className='col-md-4'>
                    <Form.Item name='company' label='Company' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                    </div>
                    <div className='col-md-4'>
                    <Form.Item name='position' label='Position' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                    </div>
                    <div className='col-md-4'>
                    <Form.Item name='whenDidYouStart' label='When did you start?' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                    </div>
                    <div className='col-md-12'>
                    <Form.Item name='ifFinishedWhen' label='If finished,when?' rules={[{required:true}]}>
                       <TextArea/>
                    </Form.Item>
                </div>
                <div className='col-md-12'>
                    <Form.Item name='whatIsYourInTheCompany' label='What is/was your work in the company?' rules={[{required:true}]}>
                       <TextArea/>
                    </Form.Item>
                </div>

            </div> */}


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




