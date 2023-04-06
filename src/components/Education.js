// import React from 'react';
// import {TextField, Button, Container} from '@material-ui/core';
// import {Card, CardHeader, CardContent} from '@material-ui/core';
// import {Paper, withStyles, Grid} from '@material-ui/core';
// import {Row, Col} from 'react-bootstrap';

// function Education({handleClickForward,handleClickBackward,value,handleChangeSchool,handleChangeRelCourse,handleChangeGradeM,handleChangeGradeY}) {

  
//     return (

//         <Paper>
       
//     <Card>
//         <CardHeader title ="Your Education"/>
//     </Card>
//    <CardContent>
//        <Grid container spacing={2} align items='center' lg={12}>
//            <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//      value={value.school}
//     label="School"
//     onChange={handleChangeSchool}

//     />
//     </Grid>
    
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//      value={value.relevantCoursework}
//     label="Relevant Coursework"
//     onChange={handleChangeRelCourse}
    
//     />
//     </Grid>
  
//     <Grid item md={6} sm={12} xs={12} lg={6}>
//     <TextField
//       value={value.graduationMonth}
//     label="Graduation Month"
//     onChange={handleChangeGradeM}
    
        
//         />
//         </Grid>
//     <Grid item md={6} sm={12} xs={12} lg={6}> 
//     <TextField
//       value={value.graduationYear}
//     label="Graduation Year"
//     onChange={handleChangeGradeY}
     
        
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

// export default Education


import React from 'react';
//import {Form,Input} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd'


function Education() {
  // const onFinish = (values) => {
  //   console.log('Received values of form:', values);
  // };
  return (
    <div>
            {/* <div className='row'>
                <div className='col-md-5'>
                    <Form.Item name='school' label='School' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                    </div>
                    <div className='col-md-5'>
                    <Form.Item name='relevantCourseWork' label='Relevant CourseWork' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                    </div>
                    <div className='col-md-5'>
                    <Form.Item name='graduationMonth' label='Graduation Month' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                    </div>
                    <div className='col-md-5'>
                    <Form.Item name='graduationYear' label='Graduation Year' rules={[{required:true}]}>
                       <Input/>
                    </Form.Item>
                </div>

            </div> */}


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
