import React,{useState} from 'react';
import { Tabs,Form ,Button,message,Spin} from 'antd';
import DefaultLayout from '../components/DefaultLayout';
import PersonalInfo from '../components/PersonalInfo';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import axios from 'axios';

const {TabPane}=Tabs;
function Profile() {
    const [loading,setLoading]=useState(false);
    const user=JSON.parse(localStorage.getItem("resumebuilder"));
    const onFinish = async(values) => {
        setLoading(true)
           try{
             const response=await axios.post('api/user/update',{...values,id:user.id}) ;
             localStorage.setItem("resumebuilder",JSON.stringify(response.data));
             setLoading(false)
            message.success('Profile has been updated successfully')
            
           
           
           }catch(error){
            setLoading(false)
               message.error('Update has beed failed')
           }
          
         };
    return (
     <DefaultLayout>
         {loading&&<Spin/>}
       <div className='update-profile'>
           <br/>
           <br/>
           <br/>
           <br/>
           <h1>CREATE YOUR RESUME</h1>
           <Form layout='vertical' onFinish={onFinish} initialValues={user}>
           <Tabs >
               <TabPane tab='Personal Info' key='1'>
               <PersonalInfo/>
               </TabPane>
               <TabPane tab='Education' key='2'>
               <Education/>
               </TabPane>
               <TabPane tab='Skills' key='3'>
               <Skills/>
               </TabPane>
               <TabPane tab='Projects' key='4'>
               <Projects/>
               </TabPane>
               <TabPane tab='Experience' key='5'>
               <Experience/>
               </TabPane>

           </Tabs>
           <Button htmlType='submit'>UPDATE</Button>
           </Form>
   
    </div>
    </DefaultLayout>
    )
}

export default Profile
